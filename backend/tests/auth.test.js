// tests/auth.test.js
const request = require('supertest');
const app = require('../server'); // Assuming server.js is the entry point of your application
var token = ""

describe('User Registration', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Test User', email: 'test@example.com', password: 'password123' });
      console.log("response",res.text)

    expect(res.status).toBe(201);
    expect(res.body.message).toBe('User registered successfully');
  });

  it('should return 400 if required fields are missing', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Test User' }); // Missing email and password
      console.log("response",res.text)

    expect(res.status).toBe(400);
  });

  // Add more test cases for validation, error handling, etc.
});


// tests/auth.test.js
describe('User Authentication', () => {
    it('should authenticate a user and return a JWT', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'test@example.com', password: 'password123' });
        console.log("response for user authentication",res.text)

      expect(res.status).toBe(200);
      expect(res.body.token).toBeTruthy();
      token = res.body.token;
    });
  
    it('should return 401 if email or password is incorrect', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'wrong@example.com', password: 'wrongpassword' });
        console.log("response",res.text)

      expect(res.status).toBe(400);
    });
  
    // Add more test cases for invalid input, error handling, etc.
  });

  describe('Profile Update Route', () => {
    it('should update user profile successfully', async () => {
      const updatedProfile = {
        name: 'Updated Name',
        email: 'updated@example.com',
        // Add other fields to update
      };
  
      const res = await request(app)
        .put('/api/auth/profile/update')
        .set('Authorization', `Bearer ${token}`)
        .send(updatedProfile);
  
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.user).toBeTruthy()
      // Additional assertions for updated profile data
    });
  
    it('should return 401 if user is not authenticated', async () => {
      const updatedProfile = {
        name: 'Updated Name',
        email: 'updated@example.com',
        // Add other fields to update
      };
  
      const res = await request(app)
        .put('/api/auth/profile/update')
        .send(updatedProfile);
  
      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe('Unauthorized');
    });
  
    // Add more test cases for edge cases, validation, etc.
  });
  

  describe('Profile Password Update Route', () => {
    it('should update user password successfully', async () => {
      const updatedPassword = {
        currentPassword: 'password123',
        newPassword: 'newPassword123',
      };
  
      const res = await request(app)
        .put('/api/auth/profile/password')
        .set('Authorization', `Bearer ${token}`)
        .send(updatedPassword);
  
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Password changed successfully");
    });
  
    it('should return 401 if user is not authenticated', async () => {
      const updatedPassword = {
        currentPassword: 'currentPassword123',
        newPassword: 'newPassword123',
      };
  
      const res = await request(app)
        .put('/api/profile/password')
        .send(updatedPassword);
  
      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe('Unauthorized');
    });
  
    // Add more test cases for edge cases, validation, etc.
  });
  