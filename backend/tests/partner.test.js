// tests/user.test.js
const request = require('supertest');
const app = require('../server');

describe('User Registration', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Test User', email: 'test@example.com', password: 'password123' });
    console.log("response", res.text)
    expect(res.status).toBe(201);
    expect(res.body.message).toBe('User registered successfully');
  });

  // Add more test cases for error handling, validation, etc.
});



describe('Partner Routes', () => {
  let authToken; // Store authentication token for partner

  beforeAll(async () => {
    // Perform partner login and obtain authentication token
    const res = await request(app)
      .post('/api/partners/login')
      .send({
        email: 'partner@example.com',
        password: 'password' // Assuming partner credentials
      });
    authToken = res.body.token;
  });

  it('should create a new partner', async () => {
    const partnerData = {
      name: 'Test Partner',
      email: 'testpartner@example.com',
      password: 'password' // Set partner password
      // Add other partner data as needed
    };

    const res = await request(app)
      .post('/api/partners/register')
      .send(partnerData);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('_id');
    // Additional assertions for partner data
  });

  it('should update partner profile', async () => {
    const updatedProfile = {
      name: 'Updated Partner Name',
      // Add other fields to update
    };

    const res = await request(app)
      .put('/api/partners/profile')
      .set('Authorization', `Bearer ${authToken}`)
      .send(updatedProfile);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe('Profile updated successfully');
    // Additional assertions for updated profile data
  });

  it('should change partner password', async () => {
    const newPasswordData = {
      currentPassword: 'password', // Assuming current password
      newPassword: 'newpassword' // Set new password
    };

    const res = await request(app)
      .put('/api/partners/password')
      .set('Authorization', `Bearer ${authToken}`)
      .send(newPasswordData);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe('Password changed successfully');
  });

  // Add more test cases for edge cases, validation, etc.
});