const Excel = require('exceljs');

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

module.exports = {
  generateExcel,
};
