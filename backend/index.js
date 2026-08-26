import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './src/routes/authRoutes.js';
import bookingRoutes from './src/routes/bookingRoutes.js';
import menuRoutes from './src/routes/menuRoutes.js';
import orderRoutes from './src/routes/orderRoutes.js';

dotenv.config();

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Root & Health check routes (unblocked by DB connection for Render health probes)
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'DineGrid API Server is Running',
    dbState: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'DineGrid API is running',
    dbState: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

// Database connection attempt on startup
const MONGO_URL = process.env.MONGO_URL;
if (MONGO_URL) {
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('⚠️ Initial MongoDB connection failed:', err.message));
}

// Middleware for API routes ensuring DB connection
app.use(async (req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    return next();
  }
  if (!MONGO_URL) {
    return res.status(500).json({ message: 'MONGO_URL environment variable is not set.' });
  }
  try {
    await mongoose.connect(MONGO_URL);
    console.log('✅ Connected to MongoDB');
    next();
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    res.status(500).json({
      message: 'Database connection failed. Please check MONGO_URL credentials.',
      error: err.message,
    });
  }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
