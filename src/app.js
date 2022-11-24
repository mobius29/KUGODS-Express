const express = require('express');
const router = require('./controller');

const app = express();

// json parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

module.exports = app;
