// models/Jobs.js
const mongoose = require('mongoose');

const jobsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: [{ type: String }],
  sector: String,
  industry: String,
  salary: String,
  country: String,
  companyName: String,
  region: String,
  reference: String,
  expireDate: { type: Date, default: Date.now() + 30 * 24 * 60 * 60 * 1000 }, // Use Date.now() instead of Date.now
  webLink: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  createdAt: { type: Date, default: Date.now },
  jobFile: { type: mongoose.Schema.Types.ObjectId, ref: 'JobFile' } // Reference to JobFile schema
});

module.exports = mongoose.model('Jobs', jobsSchema);
