const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { validateUserCreation, validateUserUpdate } = require('../middleware/validationMiddleware');
const partnerController = require('../controllers/partnerController');


// Route for listing all partners
router.get('/', authMiddleware.authenticateAdmin, partnerController.listAllPartners);
// Route for creating a user with access control
router.post('/create', authMiddleware.authenticateAdmin, validateUserCreation, partnerController.createPartner);

// Route for updating a user with access control
router.put('/:userId', authMiddleware.authenticateAdmin, validateUserUpdate, partnerController.updatePartner);

module.exports = router;
