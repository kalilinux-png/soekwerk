// email.js

const nodemailer = require('nodemailer');

// Function to send reset email
exports.sendResetEmail = async (email, token) => {
    try {
        // Create transporter
        const transporter = nodemailer.createTransport({
            // Configure your email service provider here
            // Example for Gmail:
            name: process.env.HOST_NAME,
            host: process.env.SMTP_SERVER,
            service: process.env.SMTP_SERVER,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Send email
        await transporter.sendMail({
            from: process.env.SMTP_EMAIL,
            to: email,
            subject: 'Password Reset Request',
            html: `<p>You have requested a password reset. Please click <a href="https://${process.env.ENVIROMENT === 'production' ? process.env.DOMAIN_NAME : 'localhost'}/reset-password/${token}">here</a> to reset your password.</p>`,
        });

        console.log('Reset email sent to:', email);
        return "Reset Email Sent To : " + email
    } catch (error) {
        console.error('Error sending reset email:', error);
        return "Reset Email Sent To : " + email
    }
};
