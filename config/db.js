import mongoose from 'mongoose';

// Function to connect to MongoDB
const connectDB = async () => {
  if (process.env.DB_CONNECT === 'false') {
    console.log('Skipping database connection.');
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);  // Exit process with failure
  }
};

export default connectDB;