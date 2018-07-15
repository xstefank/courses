const express = require('express');

var app = express();

app.get('/', (request, response) => {
  // response.send('<h1>Hello there!</h1>');
  response.send({
    name: 'Martin',
    likes: [
      'asd',
      'qwe'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error handling the request'
  });
});

app.listen(3000);
