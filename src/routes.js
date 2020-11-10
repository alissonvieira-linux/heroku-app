const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ mensagem: "Hello World" });
});

module.exports = routes;