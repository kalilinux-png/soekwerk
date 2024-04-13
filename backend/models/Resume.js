const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User schema
  jobListing: { type: mongoose.Schema.Types.ObjectId, ref: 'JobListing', required: true }, // Reference to JobListing schema
  resume: { type: String, required: true }, // Resume content
  coverLetter: String, // Optional cover letter
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }, // Status of resume (pending, accepted, rejected)
  feedback: String, // Feedback provided by employer
  createdAt: { type: Date, default: Date.now },
  metaData: { type: Object }
});

module.exports = mongoose.model('Resume', resumeSchema);
