const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });
// body parser 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hospitals = require('./routes/hospitals');
 
app.use('/api/v1/hospitals', hospitals); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/` , process.env.NODE_ENV);
});


