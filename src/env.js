// src/env.js
// read .env file from root -> add to env var without exposure
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path : path.resolve(process.cwd(), '.env'),
});