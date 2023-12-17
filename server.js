const express = require('express');
const dotenv = require('dotenv');

//Load env vars 
dotenv.config({ path: './config/config.env' });
// body parser
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const connectToDatabase = require('./config/db');
connectToDatabase();

// Your code here
const hospitals = require('./routes/hospitals');

app.use('/api/v1/hospitals', hospitals);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `Server running at http://localhost:${port}/`,
    process.env.NODE_ENV
  );
});

//Handle unhandled promise rejections 
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server & exit process 
  server.close(() => process.exit(1));
});