const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');
const authMiddleware = require('../middleware/authMiddleware');

// Route for creating a new job listing
router.post('/create', authMiddleware.authenticateAdmin, jobsController.createJobListing);

// Route for updating an existing job listing
router.put('/:id/update', authMiddleware.authenticateAdmin, jobsController.updateJobListing);

// Route for deleting a job listing
router.delete('/:id/delete', authMiddleware.authenticateAdmin, jobsController.deleteJobListing);

// Route for fetching all job listings
router.get('/list', jobsController.getAllJobListings);

module.exports = router;
