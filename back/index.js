const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello, Server`);
});

app.get('/about', (req, res) => {
  res.send(`Hello, about`);
});

app.listen(11000, () => {
  console.log(`server is running on localhost:8080`);
});