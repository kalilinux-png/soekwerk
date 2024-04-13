const Excel = require('exceljs');
const JobListing = require('../models/Jobs');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('excelFile'); // 'excelFile' is the name of the file field in the form


const generateExcel = async (req, res, Model) => {
  try {
    // Fetch data from the database
    const data = await Model.find();

    // Create a new Excel workbook and worksheet
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet('Data');

    // Get schema keys from the model
    const schemaKeys = Object.keys(Model.schema.paths);

    // Define columns based on schema keys
    const columns = schemaKeys.map(key => ({
      header: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
      key,
      width: 20, // Set default width
    }));

    // Define column headers
    worksheet.columns = columns;

    // Add data rows to the worksheet
    data.forEach(item => {
      const rowData = {};
      columns.forEach(column => {
        rowData[column.key] = item[column.key] || ''; // Handle optional fields
      });
      worksheet.addRow(rowData);
    });

    // Set response headers for Excel file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="data.xlsx"');

    // Write the Excel file to the response stream
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error generating Excel file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const uploadExcel = async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.files.file) {
      return res.status(400).json({ error: 'No file was uploaded' });
    }

    // Load the uploaded Excel file
    const workbook = new Excel.Workbook();
    const arrayBuffer = req.files.file.data;

    await workbook.xlsx.load(arrayBuffer);

    // Assuming the first worksheet contains job listings
    const worksheet = workbook.getWorksheet(1); // Assuming the first worksheet
    const jobListings = [];

    // Mapping of Excel headers to jobListingData properties
    const headerMap = {
      Title: 'title',
      Description: 'description',
      Requirements: 'requirements',
      Sector: 'sector',
      Industry: 'industry',
      Salary: 'salary',
      Country: 'country',
      'Company Name': 'companyName',
      Region: 'region',
      Reference: 'reference',
      'Expire Date': 'expireDate',
      'Web Link': 'webLink'
      // Add more headers and corresponding properties as needed
    };

    worksheet.eachRow({ includeEmpty: true }, async (row, rowNumber) => {
      if (rowNumber === 1) { // Header row
        // Do nothing for now, as we are handling the headers separately
      } else {
        const jobListingData = {};

        // Map each header to its corresponding property in jobListingData
        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
          const header = worksheet.getRow(1).getCell(colNumber).value.toString();
          const property = headerMap[header];
          if (property) {
            jobListingData[property] = cell.value;
          }
        });

        const newJobListing = new JobListing(jobListingData);
        await newJobListing.save();
        jobListings.push(newJobListing);
      }
    });

    res.status(200).json({ message: 'Excel file uploaded successfully', jobListings });
  } catch (error) {
    console.error('Error uploading Excel file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  generateExcel,
  uploadExcel
};
