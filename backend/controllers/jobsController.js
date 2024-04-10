const JobListing = require('../models/Joblisting');

// Create a new job listing
const createJobListing = async (req, res) => {
  try {
    const { title, description, requirements } = req.body;

    // Create a new job listing instance
    const jobListing = new JobListing({
      title,
      description,
      requirements
    });

    // Save the job listing to the database
    await jobListing.save();

    // Return success message
    res.status(201).json({ msg: 'Job listing created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update an existing job listing
const updateJobListing = async (req, res) => {
  try {
    const jobId = req.params.id;
    const { title, description, requirements } = req.body;

    // Find job listing by id and update information
    await JobListing.findByIdAndUpdate(jobId, { title, description, requirements });

    // Return success message
    res.json({ msg: 'Job listing updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete a job listing
const deleteJobListing = async (req, res) => {
  try {
    const jobId = req.params.id;

    // Find job listing by id and delete it
    await JobListing.findByIdAndDelete(jobId);

    // Return success message
    res.json({ msg: 'Job listing deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all job listings
const getAllJobListings = async (req, res) => {
  try {
    // Fetch all job listings from the database
    const jobListings = await JobListing.find();

    // Return job listings
    res.json({ jobListings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  createJobListing,
  updateJobListing,
  deleteJobListing,
  getAllJobListings
};
