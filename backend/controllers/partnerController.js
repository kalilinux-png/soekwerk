// PartnerController.js

const PartnerModel = require('../models/Partner'); // Assuming you have a User model

// Controller function for creating a user
const createPartner = async (req, res) => {
  try {
    const { name, email, accessControl } = req.body;

    // Create Partner
    const newPartner = await PartnerModel.create({
      name,
      email,
      accessControl,
    });

    res.status(201).json({ success: true, data: newPartner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
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
  updatePartner
}