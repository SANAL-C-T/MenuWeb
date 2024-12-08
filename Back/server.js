require('dotenv').config();
const express = require('express');
const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 3000;


const frontUrl = process.env.API_URL;
const mongoose = require("mongoose");
const config = require("./Model/Config"); 

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 10000 
}).then(() => {
  console.log("Connected to MongoDB database Menu in Atlas");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
const corsOptions = {
  origin: `${frontUrl}`, 
  credentials: true 
};
server.use(cors(corsOptions));

// Routes
const urlRoutes = require("./Router/Router");
server.use('/', urlRoutes);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
