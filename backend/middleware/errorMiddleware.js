// middleware/errorHandler.js
exports.handleError = (err, req, res, next) => {
    // Default error status and message
    let status = 500;
    let message = 'Internal server error';
  
    // Check for specific error types and update status and message accordingly
    if (err.name === 'ValidationError') {
      status = 400;
      message = err.message;
    } else if (err.name === 'UnauthorizedError') {
      status = 401;
      message = 'Unauthorized access';
    } else if (err.name === 'NotFound') {
      status = 404;
      message = 'Resource not found';
    }
  
    // Log the error for debugging purposes
    console.error('Error:', err);
  
    // Send error response with appropriate status code and message
    res.status(status).json({ message });
  };
  