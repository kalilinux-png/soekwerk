// PartnerController.js
const bcrypt = require('bcryptjs');
const StaffModel = require('../models/Staff'); // Assuming you have a User model
const logger = require("../loggers/logger")


// Controller function to list all Staffs
const listAllStaffs = async (req, res) => {
  try {
    // Fetch all Staffs from the database
    const Staffs = await StaffModel.find().select('-password');

    // Send the list of Staffs in the response
    res.status(200).json(Staffs);
  } catch (error) {
    // Handle any errors
    console.error('Error listing Staffs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function for creating a user
const createStaff = async (req, res) => {
  try {
    const { name, email, password, accessControl,staffCode } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create Staff
    const newStaff = await StaffModel.create({
      name,
      email,
      password: hashedPassword,
      accessControl,
      staffCode
    });

    res.status(201).json({ success: true, data: newStaff });
  } catch (error) {
    console.error(error);
    logger.error("Error in Creating Staff ",error)
    res.status(500).json({ success: false, message: 'Server Error', error: error });
  }
};

// Controller function for updating a Staff
const updateStaff = async (req, res) => {
  try {
    const { name, email, accessControl } = req.body;
    const StaffId = req.params.StaffId;

    // Find Staff by ID
    let Staff = await StaffModel.findById(StaffId);

    if (!Staff) {
      return res.status(404).json({ success: false, message: 'Staff not found' });
    }

    // Update Staff
    Staff.name = name;
    Staff.email = email;
    Staff.accessControl = accessControl;
    await Staff.save();

    res.json({ success: true, message: 'Staff updated successfully', data: Staff });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};



module.exports =  { 
  createStaff,
  updateStaff,
  listAllStaffs
}