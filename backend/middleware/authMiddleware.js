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
    console.log("decoded for admin", decoded)

    // Check if user is an admin
    if (decoded.role !== 'admin' && decoded.role !== 'partner') {
      return res.status(403).json({ msg: 'Authorization denied. Not an admin and partner' });
    }

    // Attach user data to request object
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: 'Authorization denied. Invalid token' });
  }
};


const authenticatePartner = (requiredPermissions) => (req, res, next) => {
  // Extract JWT token from request headers
  const token = req.header('Authorization');

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied. No token provided' });
  }

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded for partner", decoded)
    // Extract partner's role and permissions from decoded token
    const { role, permissions } = decoded;
    if (role === "admin") { // Because Admin Has All The Access
     return next()
    }

    // Check if partner's permissions include required permissions
    const hasRequiredPermissions = requiredPermissions.every(permission => permissions.includes(permission));

    if (!hasRequiredPermissions) {
      return res.status(403).json({ message: 'Authorization denied. Insufficient permissions' });
    }

    // If all checks pass, proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Authorization denied. Invalid token' });
  }
};


module.exports = {
  authenticateUser,
  authenticateAdmin,
  authenticatePartner
};
