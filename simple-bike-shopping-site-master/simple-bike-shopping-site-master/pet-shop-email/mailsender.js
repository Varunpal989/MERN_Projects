require('dotenv').config();
const nodemailer = require('nodemailer');

// Create a transporter object using your email service credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS,  // Use environment variable
    },
});

// Function to send an email
const sendEmail = (name, email, phone, message) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Use environment variable
        to: 'recipient-email@example.com', // Where you want to send the email
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error:', error);
        }
        console.log('Email sent:', info.response);
    });
};

// Example usage
sendEmail('John Doe', 'john@example.com', '1234567890', 'Hello, I have a query about your pets.');

