const express = require('express');
const http = require('http');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = http.Server(app);

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json());
app.use(routes);

server.listen(3334);