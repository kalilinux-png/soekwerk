// authController.js

// const User = require('../models/User');
const User = require('../models/Staff');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { generateResetToken } = require('../utils/resetToken');
const { sendResetEmail } = require('../utils/email');

// Controller function to handle password reset
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Generate reset token
        const resetToken = generateResetToken(user);

        // Send reset email
        const mailSend = await sendResetEmail(user.email, resetToken);

        // Update user record with reset token and expiration time
        user.resetToken = resetToken.token;
        user.resetTokenExpires = resetToken.expires;
        await user.save();

        // Respond with success message
        res.status(200).json({ message: mailSend });
    } catch (error) {
        console.error('Error in forgotPassword controller:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};



// Controller function to validate reset token and reset user password
exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if user exists
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Update user's password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Password reset successfully.' });
    } catch (error) {
        console.error('Error in resetPassword controller:', error);
        if (error.name === 'TokenExpiredError') {
            return res.status(400).json({ message: 'Token expired. Please request a new password reset token.' });
        }
        res.status(400).json({ message: 'Invalid or expired token.' });
    }
};