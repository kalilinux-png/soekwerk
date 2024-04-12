const express = require('express');
const router = express.Router();
const jobFileController = require('../controllers/jobFileController');
const authMiddleware = require('../middleware/authMiddleware');

const permissions = {
  createJobFile: ['create_job_file'],
  updateJobFile: ['update_job_file'],
  deleteJobFile: ['delete_job_file'],
  listJobFiles: ['list_job_files']
};

// POST request to create a new JobFile
router.post('/', authMiddleware.authenticateAdmin, authMiddleware.authenticatePartner(permissions.createJobFile), jobFileController.createJobFile);

// GET request to retrieve all JobFiles
router.get('/', authMiddleware.authenticateAdmin, authMiddleware.authenticatePartner(permissions.listJobFiles), jobFileController.getAllJobFiles);

// GET request to retrieve a JobFile by ID
router.get('/:jobFileId', authMiddleware.authenticateAdmin, authMiddleware.authenticatePartner(permissions.listJobFiles), jobFileController.getJobFileById);

// PUT request to update a JobFile by ID
router.put('/:jobFileId', authMiddleware.authenticateAdmin, authMiddleware.authenticatePartner(permissions.updateJobFile), jobFileController.updateJobFile);

// DELETE request to delete a JobFile by ID
router.delete('/:jobFileId', authMiddleware.authenticateAdmin, authMiddleware.authenticatePartner(permissions.deleteJobFile), jobFileController.deleteJobFile);

module.exports = router;
