const request = require('supertest');
const app = require('../server'); // Assuming your Express app is exported as 'app'
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');



var adminToken = "";



describe('User Authentication', () => {
    it('should authenticate a user and return a JWT', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: "admin@demo.com", password: 'admin@demo.com' });

        expect(res.status).toBe(200);
        expect(res.body.token).toBeTruthy();
        adminToken = res.body.token;
    });
});


describe('User Routes', () => {
  // Before running tests, connect to the MongoDB database and clear the User collection
  beforeAll(async () => {
    // await mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
    await User.deleteMany({});
  });

  // After running tests, disconnect from the MongoDB database
  afterAll(async () => {
    await mongoose.disconnect();
  });

  // Test case for creating a new user
  it('should create a new user', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123', // You can use a plain text password here since it will be hashed in the controller
      // Add other required fields here
    };

    const res = await request(app)
      .post('/api/user')
      .set('Authorization', `${adminToken}`)
      .send(userData);

    expect(res.status).toBe(201);
    expect(res.body.name).toBe(userData.name);
    // Add assertions for other fields as needed
  });

  // Test case for updating an existing user
  it('should update an existing user', async () => {
    // Create a user to update
    const user = await User.create({
      name: 'Existing User',
      email: 'existing@example.com',
      hashedPassword: await bcrypt.hash('password123', 10), // Hash the password before saving
      // Add other required fields here
    });

    const updatedUserData = {
      name: 'Updated User Name',
      // Add other fields to update here
    };

    const res = await request(app)
      .put(`/api/user/${user._id}`)
      .set('Authorization', `${adminToken}`)
      .send(updatedUserData);

    expect(res.status).toBe(200);
    expect(res.body.name).toBe(updatedUserData.name);
    // Add assertions for other fields as needed
  });

  // Test case for deleting a user
  it('should delete an existing user', async () => {
    // Create a user to delete
    const user = await User.create({
      name: 'User to delete',
      email: 'delete@example.com',
      hashedPassword: await bcrypt.hash('password123', 10), // Hash the password before saving
      // Add other required fields here
    });

    const res = await request(app)
      .delete(`/api/user/${user._id}`)
      .set('Authorization', `${adminToken}`)
       .send();

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('User deleted successfully');
  });
});
