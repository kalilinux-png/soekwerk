// models/Industry.js
const mongoose = require('mongoose');

const industrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  metaData: {type:Object}

  // Other fields as needed
});

module.exports = mongoose.model('Industry', industrySchema);
