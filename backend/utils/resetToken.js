// resetToken.js
const jwt = require('jsonwebtoken');

// Function to generate reset token
exports.generateResetToken = (user) => {
    // Generate JWT token with user ID and expiration time
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  };