// implement your API here

const express = require('express');

const server = express();

const db = require('./data/db.js');

server.use(express.json());

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server is running on port ${port}`));

  