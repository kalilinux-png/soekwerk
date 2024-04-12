// models/Company.js
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: String,
  location: String,
  website: String,
  metaData: {type:Object}

  // Other fields as needed
});

module.exports = mongoose.model('Company', companySchema);
