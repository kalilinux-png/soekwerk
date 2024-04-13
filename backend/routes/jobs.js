const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');
const authMiddleware = require('../middleware/authMiddleware');
const excelController = require('../controllers/excelController'); // Import the controller for Excel file generation

const permissions = {
    createJob: ['create_job'],
    updateJob: ['update_job'],
    deleteJob: ['delete_job'],
    listJobs: ['list_jobs'],
    downloadExcel: ['download_excel'] // Add a permission for downloading Excel
};

// Route for creating a new job listing
router.post('/create', authMiddleware.authenticateAdmin, authMiddleware.authenticatePartner(permissions.createJob), jobsController.createJobListing);

// Route for updating an existing job listing
router.put('/:id/update', authMiddleware.authenticateAdmin, authMiddleware.authenticatePartner(permissions.updateJob), jobsController.updateJobListing);

// Route for deleting a job listing
router.delete('/:id/delete', authMiddleware.authenticateAdmin, authMiddleware.authenticatePartner(permissions.deleteJob), jobsController.deleteJobListing);

// Route for fetching all job listings
router.get('/list', authMiddleware.authenticatePartner(permissions.listJobs), jobsController.getAllJobListings);

// Route for downloading Excel file of all job listings
router.get('/download-excel', authMiddleware.authenticatePartner(permissions.downloadExcel),  jobsController.downloadExcel); // Create a new endpoint for downloading Excel

module.exports = router;
