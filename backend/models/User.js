const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true }, // Store hashed passwords
  preferences: [String], // General preferences
  skills: [{
    skill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }, // Reference to Skill schema
    proficiency: { type: Number, min: 1, max: 5 } // Represent proficiency on a scale (e.g., 1-5)
  }],
  experience: [{
    title: String,
    company: String,
    location: String,
    startDate: Date,
    endDate: Date,
    description: String
  }],
  education: [{
    institution: String,
    degree: String,
    fieldOfStudy: String,
    startDate: Date,
    endDate: Date
  }],
  location: String,
  country: String,
  region: String,
  resume: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume' }, // Reference to Resume schema
  sector: { type: mongoose.Schema.Types.ObjectId, ref: 'Sector' }, // Reference to Sector schema
  isActive: { type: Boolean, default: true }, // Added isActive field for user status
  isPaid: { type: Boolean, default: false }, // Added isPaid field for paid status
  interactionHistory: [{
    jobMatched: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }, // Reference to matched job
    interactionDate: { type: Date, default: Date.now }, // Date of interaction
    outcome: String, // Outcome of interaction (e.g., Interview Scheduled, Rejected)
    feedback: String // User feedback on job match
  }],
  createdAt: { type: Date, default: Date.now },
  metaData: { type: Object }
});

module.exports = mongoose.model('User', userSchema);
