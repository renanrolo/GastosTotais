const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');

const { mongoConnectionString } = require('./configs/mongodbconfig.env')

mongoose.connect(mongoConnectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const app = express();
const server = http.Server(app);

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json());

require('./routes')(app)

server.listen(3334);