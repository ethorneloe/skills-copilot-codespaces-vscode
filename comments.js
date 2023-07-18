// Create web server
// 1. Create web server
// 2. Create a route for GET requests to /comments
// 3. Create a route for POST requests to /comments
// 4. Create a route for PUT requests to /comments/:id
// 5. Create a route for DELETE requests to /comments/:id
// 6. Start the server on port 3001

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const comments = [
  { id: 1, author: 'Morgan McCircuit', text: 'Great picture!' },
  { id: 2, author: 'Bending Bender', text: 'Excellent stuff' },
];

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  console.log('GET /comments');
  res.json(comments);
});