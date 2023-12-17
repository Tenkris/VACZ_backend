// MongoDB Connection URL
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dbURI = process.env.MONGO_URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectToDatabase;
