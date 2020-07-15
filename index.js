const express = require('express');
const app = express();

// Require listener func with giving app func
require('./startup/listener')(app);

// Require Body Parser func with giving app func
require('./startup/body-parser')(app);

// Require middleware func with giving blank func
require('./startup/middleware')();

// Require db connection
require('./startup/db');

// Require all routes with giving app func
require('./startup/routes')(app);

// Deployment Configurations
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'), {
      removeAttributeQuotes: true,
    });
  });
}

app.get('/', (req, res) => {
  res.json({ message: 'oke' });
});
