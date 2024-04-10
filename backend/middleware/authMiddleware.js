const jwt = require('jsonwebtoken');

// Middleware to authenticate user
const authenticateUser = (req, res, next) => {
  // Get token from request headers
  const token = req.header('Authorization');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ msg: 'Authorization denied. No token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to request object
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: 'Authorization denied. Invalid token' });
  }
};

// Middleware to authenticate admin
const authenticateAdmin = (req, res, next) => {
  // Get token from request headers
  const token = req.header('Authorization');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ msg: 'Authorization denied. No token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded for admin",decoded)

    // Check if user is an admin
    if (decoded.role !== 'admin') {
      return res.status(403).json({ msg: 'Authorization denied. Not an admin' });
    }

    // Attach user data to request object
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: 'Authorization denied. Invalid token' });
  }
};

module.exports = {
  authenticateUser,
  authenticateAdmin
};
