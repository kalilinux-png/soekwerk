// middleware/validation.js
const { validationResult, check } = require('express-validator');
exports.validateUserRegistration = (req, res, next) => {
    const { name, email, password ,staffCode} = req.body;
    if (!name || !email || !password || !staffCode) {
      return res.status(400).json({ message: 'Name, email, staffCode,and password are required' });
    }
    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    // Additional validation logic as needed
    next();
  };
  
  function isValidEmail(email) {
    // Regular expression for basic email format validation
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  

  // middleware/validation.js
exports.validateUserAuthentication = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    next();
  };
  
 exports.validateUserCreation = [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Invalid email address'),
    // Add more validation rules as needed
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }
      next();
    }
  ];

  exports.validateUserUpdate = [
    check('name').optional().notEmpty().withMessage('Name is required'),
    check('email').optional().isEmail().withMessage('Invalid email address'),
    // Add more validation rules as needed
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }
      next();
    }
  ];
