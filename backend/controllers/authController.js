// const User = require('../models/User');
const User = require('../models/Staff');
// ⚠️⚠️⚠️ don't get confused User with User's (job searching user) this are staff  too laxy to udpate code ,
// that's why i added comment 😎
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    // Extract user data from request body
    const { name, email, password, staffCode } = req.body;

    // Check if user with the same email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user instance
    user = new User({
      name,
      email,
      password: hashedPassword,
      staffCode
    });

    // Save the user to the database
    await user.save();
    console.log("User", user._id.toString());
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Return success response with token
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const login = async (req, res) => {
  try {
    // Extract user credentials from request body
    const { email, password } = req.body;

    // Check if user with the provided email exists
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.findOne({ email })
    }
    console.log("user", user)
    if (!user) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT token with user role and permissions in the payload
    const token = jwt.sign({
      id: user._id,
      role: user.role,
      permissions: user?.accessControl  // Assuming 'permissions' is a field in your User or Partner schema
    }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // Set the JWT token as a cookie in the response
    res.cookie('Authorization', token, {
      expires: new Date(Date.now() + 3600000), domain: req.hostname,
      sameSite: "None",
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' ? true : true,
    }); // Cookie expires in 1 hour
 
    // Return success response with token
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};


// Update user profile
const updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = req.user.id; // Extract user id from authenticated user

    // Find user by id and update profile information
    let user = await User.findByIdAndUpdate(userId, { name, email }, { new: true });

    // Return updated user profile
    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Change user password
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.id; // Extract user id from authenticated user

    // Find user by id
    let user = await User.findById(userId);

    // Check if current password matches
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Current password is incorrect' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    // Return success message
    res.json({ msg: 'Password changed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};



module.exports = {
  updateProfile,
  changePassword,
  register,
  login
};


