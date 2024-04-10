// models/JobListing.js
const mongoose = require('mongoose');

const jobListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: [String],
  location: String,
  industry: String,
  employmentType: String,
  salary: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JobListing', jobListingSchema);
