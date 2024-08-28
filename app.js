import express from "express";
import cors from "cors";
import path, { dirname } from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
import connectDB from './config/db.js';
import categoryRoutes from "./routes/categoryRoutes.js";
import Category from "./models/Category.js";
import "./keepAlive.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Load environment variables from .env
dotenv.config();

//connect to database
const startApp = async () => {
  await connectDB();  // Connect to the database
  
  // Your application logic here
  console.log('Application started.');
};

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", (req, res, next) => {
  console.log(`API Request Received: ${new Date().toISOString()} - Method: ${req.method} - Path: ${req.originalUrl}`);
  next();
}, authRoutes);

app.use('/api/v1/category', categoryRoutes);

// Add route for /get-categories
app.get('/api/v1/category/get-categories', async (req, res) => {
  try {
    // Fetch categories logic here
    const categories = await Category.find(); // Example: Use your model to fetch categories from the database

    res.json({ success: true, categories });
  } catch (error) {
    console.error('Error fetching categories', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Add route for sending emails
app.post('/api/send-enquiry', upload.none(), async (req, res) => {
  const { name, email, phone, state, city, celebration, services, celebrationDate, priceRange, requirements } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'rnsfreelancers89@gmail.com',  // Replace with the fixed recipient email address
    subject: 'New Service Enquiry',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      State: ${state}
      City: ${city}
      Celebration: ${celebration}
      Services: ${services}
      Celebration Date: ${celebrationDate}
      Price Range: ${priceRange}
      Requirements: ${requirements}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Error sending email' });
  }
});

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'client', 'build', 'index.html');
  res.sendFile(index);
});

const PORT = process.env.PORT || 8087;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
