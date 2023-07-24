const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Set up your email transporter (you need to provide your email credentials)
    const transporter = nodemailer.createTransport({
      service: 'Your_Email_Service_Provider',
      auth: {
        user: 'your_email@example.com', // Replace with your email address
        pass: 'your_email_password', // Replace with your email password
      },
    });

    const mailOptions = {
      from: email,
      to: 'your_email@example.com', // Replace this with your email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on http://localhost:${PORT}`);
});
