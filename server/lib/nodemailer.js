
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,               
  secure: true,            
  auth: {
    user: process.env.EMAIL_USER,        // Gmail address
    pass: process.env.EMAIL_PASSWORD,    // App Password
  },
  tls: {
    rejectUnauthorized: false,  
  }
});

// MAIN FUNCTION
const sendEmail = async ( text) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.Email_resive,
      subject: "New Contact Form Submission",
      text
    });

    console.log("Email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return false;
  }
};

module.exports = sendEmail;