import express from "express";
import cors from "cors"
import path, { dirname } from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv"
import connectDB from './config/db.js';
import categoryRoutes from "./routes/categoryRoutes.js"
import Category from "./models/Category.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Load environment variables from .env
dotenv.config();

//connect to database
connectDB();

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

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', function (req, res) {
  const index = path.join(__dirname,'client', 'build', 'index.html');
  res.sendFile(index);
});

const PORT = process.env.PORT || 8087;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
