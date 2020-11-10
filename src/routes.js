const express = require('express');

const routes = express.Router();

const users = [
  { id: 1, name: 'Alisson Vieira', age: 18 },
  { id: 2, name: 'Developer', age: 21 }
]

routes.get('/', (request, response) => {
  return response.json({ mensagem: "Hello World" });
});

routes.get('/users', (request, response) => {
  return response.json(users);
});

module.exports = routes;