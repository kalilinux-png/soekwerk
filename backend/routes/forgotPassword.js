// forgotPassword.js

const express = require('express');
const router = express.Router();
const { resetPassword ,forgotPassword } = require('../controllers/passwordController');

// POST route to initiate password reset
router.post('/forgot-password', forgotPassword);
// POST route to validate reset token
router.post('/reset-password', resetPassword);


module.exports = router;
