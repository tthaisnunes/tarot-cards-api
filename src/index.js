const express = require('express');
const app = express();
const routes = require('../routes');

app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static('public')); // Serve images
app.use('/', routes); 

app.listen(3001, () => console.log('Server started at http://localhost:3001'));
