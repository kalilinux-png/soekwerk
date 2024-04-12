const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const authMiddleware = require('../middleware/authMiddleware');

const permissions = {
    createcompany : ['create_company '],
    updatecompany : ['update_company '],
    deletecompany : ['delete_company '],
    listcompany : ['list_company']
};


// Get all companies
router.get('/',authMiddleware.authenticateAdmin,authMiddleware.authenticatePartner(permissions.listcompany), companyController.getAllCompanies);

// Create a new company
router.post('/create',authMiddleware.authenticateAdmin,authMiddleware.authenticatePartner(permissions.createcompany), companyController.createCompany);

// Get company by ID
router.get('/:companyId',authMiddleware.authenticateAdmin,authMiddleware.authenticatePartner(permissions.listcompany), companyController.getCompanyById);

// Update company by ID
router.put('/:companyId',authMiddleware.authenticateAdmin,authMiddleware.authenticatePartner(permissions.updatecompany), companyController.updateCompany);

// Delete company by ID
router.delete('/:companyId',authMiddleware.authenticateAdmin,authMiddleware.authenticatePartner(permissions.deletecompany), companyController.deleteCompany);

module.exports = router;
