// models/JobFile.js
const mongoose = require('mongoose');

const jobFileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  data: { type: Buffer, required: true }
});

module.exports = mongoose.model('JobFile', jobFileSchema);
