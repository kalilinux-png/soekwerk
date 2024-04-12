// PartnerController.js
const bcrypt = require('bcryptjs');
const PartnerModel = require('../models/Partner'); // Assuming you have a User model


// Controller function to list all partners
const listAllPartners = async (req, res) => {
  try {
    // Fetch all partners from the database
    const partners = await PartnerModel.find().select('-password');

    // Send the list of partners in the response
    res.status(200).json(partners);
  } catch (error) {
    // Handle any errors
    console.error('Error listing partners:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function for creating a user
const createPartner = async (req, res) => {
  try {
    const { name, email, password, accessControl } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create Partner
    const newPartner = await PartnerModel.create({
      name,
      email,
      password: hashedPassword,
      accessControl,
    });

    res.status(201).json({ success: true, data: newPartner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error', error: error });
  }
};

// Controller function for updating a Partner
const updatePartner = async (req, res) => {
  try {
    const { name, email, accessControl } = req.body;
    const PartnerId = req.params.PartnerId;

    // Find Partner by ID
    let Partner = await PartnerModel.findById(PartnerId);

    if (!Partner) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }

    // Update Partner
    Partner.name = name;
    Partner.email = email;
    Partner.accessControl = accessControl;
    await Partner.save();

    res.json({ success: true, message: 'Partner updated successfully', data: Partner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};



module.exports =  { 
  createPartner,
  updatePartner,
  listAllPartners
}