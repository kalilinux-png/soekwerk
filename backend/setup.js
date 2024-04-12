// setup.js

const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();
const bcrypt = require('bcryptjs');



// Connect to the database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Create admin user
    const email = 'admin@demo.com'
    const hashedPassword = await bcrypt.hash('admin@demo.com', 10);


    const adminUser = new User({
      name: 'admin',
      email: email,
      password: hashedPassword,
      staffCode:"adminA1",
      role:'admin'
    });

    // Save admin user to the database
    adminUser.save()
      .then(() => {
        console.log('Admin user created successfully');
        mongoose.connection.close();
      })
      .catch(error => {
        console.error('Error creating admin user:', error);
        mongoose.connection.close();
      });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
