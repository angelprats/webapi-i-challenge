// implement your API here

const express = require('express');

const server = express();

const db = require('./data/db.js');

server.use(express.json());

server.post('/api/users', (req, res) => {
    const apiInfo = req.body;
    if(!apiInfo.name || !apiInfo.bio) {
        res.status(400).json({message: 'Please provide a name and bio for the user'});
    } else {
        db.insert(apiInfo)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).json({ error: "There was an error while saving the user to the database" }));
    }
})

server.get('/api/users', (req, res) => {
    db.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({ error: "The user information could not be retrieved." }))
})

server.get('/api/users', (req, res) => {
    db.findById(id)
    .then(users => res.status(200).json(users))
    .catch(err => res.status(404).json({ message: "The user with specified id does not exist." }));
})




const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`server is running on port ${port}`));

  