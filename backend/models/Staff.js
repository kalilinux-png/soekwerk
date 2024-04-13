// Staff.js

const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
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
  staffCode: { 
    type:String,
    required:true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['partner','admin'],
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
  },
  metaData: { type: Object }
});

// Virtual property to get Staff's full name
StaffSchema.virtual('fullName').get(function () {
  return `${this.name}`;
});

const Staff = mongoose.model('Staff', StaffSchema);

module.exports = Staff;
