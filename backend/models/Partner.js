// Partner.js

const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['partner'],
    default: 'partner'
  },
  accessControl: {
    type: Array,
    default: ['list_jobs', 'create_job', 'update_job', 'delete_job']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Virtual property to get Partner's full name
PartnerSchema.virtual('fullName').get(function () {
  return `${this.name}`;
});

const Partner = mongoose.model('Partner', PartnerSchema);

module.exports = Partner;
