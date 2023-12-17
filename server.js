const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

