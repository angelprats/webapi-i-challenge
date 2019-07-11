// implement your API here
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const server = require('./api/server.js');



const port = process.env.PORT || 6000;
server.listen(port, () => {
    console.log(`\n*** Server is running on http://localhost:${port} ***\n`);
    });



