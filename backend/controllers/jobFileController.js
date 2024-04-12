const JobFile = require('../models/JobFile');

// Create a new JobFile
exports.createJobFile = async (req, res) => {
  try {
    const { filename, contentType, data } = req.body;
    const jobFile = new JobFile({ filename, contentType, data });
    await jobFile.save();
    res.status(201).json(jobFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all JobFiles
exports.getAllJobFiles = async (req, res) => {
  try {
    const jobFiles = await JobFile.find();
    res.status(200).json(jobFiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get JobFile by ID
exports.getJobFileById = async (req, res) => {
  try {
    const jobFileId = req.params.jobFileId;
    const jobFile = await JobFile.findById(jobFileId);
    if (!jobFile) {
      return res.status(404).json({ msg: 'JobFile not found' });
    }
    res.status(200).json(jobFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update JobFile by ID
exports.updateJobFile = async (req, res) => {
  try {
    const jobFileId = req.params.jobFileId;
    const { filename, contentType, data } = req.body;
    const updatedJobFile = await JobFile.findByIdAndUpdate(
      jobFileId,
      { filename, contentType, data },
      { new: true }
    );
    if (!updatedJobFile) {
      return res.status(404).json({ msg: 'JobFile not found' });
    }
    res.status(200).json(updatedJobFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete JobFile by ID
exports.deleteJobFile = async (req, res) => {
  try {
    const jobFileId = req.params.jobFileId;
    const deletedJobFile = await JobFile.findByIdAndDelete(jobFileId);
    if (!deletedJobFile) {
      return res.status(404).json({ msg: 'JobFile not found' });
    }
    res.status(200).json({ msg: 'JobFile deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};
