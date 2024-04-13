// models/Sector.js
const mongoose = require('mongoose');

const sectorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subSector: { type: String, required: true },
  metaData: {type:Object}

  // Other fields as needed
});

module.exports = mongoose.model('Sector', sectorSchema);
