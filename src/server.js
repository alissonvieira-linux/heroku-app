require('dotenv/config');

const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);

server.listen(process.env.PORT, () => console.log("Server started at LOCALHOST: ", process.env.PORT));