// requestLogger.js

const { createLogger, transports, format } = require('winston');

// Create a Winston logger instance for request logging
const requestLogger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'request.log' })
  ]
});

// Middleware function to log incoming requests
function logRequests(req, res, next) {
  requestLogger.info({
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url,
    ip: req.ip,
    headers: req.headers
  });
  next();
}

module.exports = logRequests;
