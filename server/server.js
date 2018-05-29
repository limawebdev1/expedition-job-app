'use strict';
require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const environment = process.env.NODE_ENV;

// Routes
const authRoutes = require('./routes/authentication');
const applicationRoutes = require('./routes/applications');

app.use(cors());
app.use(bodyParser.json({
  type: '*/*'
}));

app.use('/api', authRoutes);
app.use('/api/applications', applicationRoutes);

// Interal server error handler
app.use(function (err, req, res) {
  res.statusCode = (err.status || 500);
  res.send({
    status: err.status,
    message: err.message
  });
});

// Server Setup
let server = http.createServer(app);

let port = process.env['PORT'] || '3000';
let addr = process.env['HOST'] || '0.0.0.0';

console.log('Starting application on: http://' + addr + ':' + port); // eslint-disable-line no-console
server.listen(port, addr);
module.exports = { app, server };