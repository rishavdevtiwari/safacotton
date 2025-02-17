// env.js
const dotenv = require('dotenv');

dotenv.config();

const env = process.env;

// Expose the env variables as a global object
window.env = env;