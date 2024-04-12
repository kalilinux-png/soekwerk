const Company = require('../models/Company');

// Create a new company
exports.createCompany = async (req, res) => {
    try {
        const { name, industry, location, website, metaData } = req.body; // Destructuring req.body
        const company = new Company({
            name,
            industry,
            location,
            website,
            metaData
        });
        await company.save();
        res.status(201).json(company);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get company by ID
exports.getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.companyId;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({ msg: 'Company not found' });
        }
        res.status(200).json(company);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};

// Update company by ID
exports.updateCompany = async (req, res) => {
    try {
        const companyId = req.params.companyId;
        const { name, industry, location, website, metaData } = req.body; // Destructuring req.body
        const updatedCompany = await Company.findByIdAndUpdate(companyId, { name, industry, location, website, metaData }, { new: true });
    if (!updatedCompany) {
            return res.status(404).json({ msg: 'Company not found' });
        }
        res.status(200).json(updatedCompany);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};

// Delete company by ID
exports.deleteCompany = async (req, res) => {
    try {
        const companyId = req.params.companyId;
        const deletedCompany = await Company.findByIdAndDelete(companyId);
        if (!deletedCompany) {
            return res.status(404).json({ msg: 'Company not found' });
        }
        res.status(200).json({ msg: 'Company deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};
