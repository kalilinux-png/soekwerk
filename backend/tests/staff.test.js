const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const StaffModel = require('../models/Staff');

var admin_token = '';

describe('User Authentication', () => {
  it('should authenticate a user and return a JWT', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@demo.com', password: 'admin@demo.com' });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeTruthy();
    admin_token = res.body.token;
  });

  // Add more test cases for invalid input, error handling, etc.
});

// Test data for creating a new staff
const testData = {
  name: 'Test Staff',
  email: 'teststaff@example.com',
  password: 'password123',
  accessControl: ['admin']
};

describe('Staff Endpoints', () => {
  // Clear the Staff collection before each test
  beforeEach(async () => {
    await StaffModel.deleteMany();
  });

  // Test for creating a new staff
  it('should create a new staff', async () => {
    const res = await request(app)
      .post('/api/staff/create')
      .set('Authorization', `${admin_token}`) // Replace <admin_token> with a valid admin token
      .send(testData);
    console.log("create response",res.text)
    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.name).toEqual(testData.name);
    expect(res.body.data.email).toEqual(testData.email);
    expect(res.body.data.accessControl).toEqual(testData.accessControl);

    // Check if the password is hashed
    const staff = await StaffModel.findOne({ email: testData.email });
    const passwordMatch = await bcrypt.compare(testData.password, staff.password);
    expect(passwordMatch).toBe(true);
  });

  // Test for listing all staffs
  it('should list all staffs', async () => {
    await StaffModel.create(testData);
    const res = await request(app)
      .get('/api/staff')
      .set('Authorization', `${admin_token}`); // Replace <admin_token> with a valid admin token
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // Test for updating a staff
  it('should update a staff', async () => {
    const staff = await StaffModel.create(testData);
    console.log("staff",staff)
    const updatedData = { ...testData, name: 'Updated Test Staff' };
    const res = await request(app)
      .put(`/api/staff/${staff._id.toString()}`)
      .set('Authorization', `${admin_token}`) // Replace <admin_token> with a valid admin token
      .send(updatedData);
    console.log("udpate response",res.text)
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.name).toEqual('Updated Test Staff');
  });
});

// Close the MongoDB connection after all tests are completed
afterAll(async () => {
  await mongoose.connection.close();
});
