// config.js

const base_url = process.env.NODE_ENV === 'production' ? 'https://soekwerk.onrender.com' : 'http://localhost:8000';
const api_key = process.env.API_KEY || 'default_api_key';

module.exports = {
  base_url,
  api_key,
};
