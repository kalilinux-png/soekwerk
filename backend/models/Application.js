// models/Application.js
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  jobListing: { type: mongoose.Schema.Types.ObjectId, ref: 'JobListing' },
  resume: String,
  coverLetter: String,
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  metaData: {type:Object}
});

module.exports = mongoose.model('Application', applicationSchema);
