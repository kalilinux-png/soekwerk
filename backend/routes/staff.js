const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { validateUserCreation, validateUserUpdate } = require('../middleware/validationMiddleware');
const StaffController = require('../controllers/staffController');


// Route for listing all Staffs
router.get('/', authMiddleware.authenticateAdmin, StaffController.listAllStaffs);
// Route for creating a user with access control
router.post('/create', authMiddleware.authenticateAdmin, validateUserCreation, StaffController.createStaff);

// Route for updating a user with access control
router.put('/:StaffId', authMiddleware.authenticateAdmin, validateUserUpdate, StaffController.updateStaff);

module.exports = router;
