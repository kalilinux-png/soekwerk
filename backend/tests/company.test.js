const request = require('supertest');
const app = require('../server'); // Assuming your Express app is exported from app.js or index.js
const mongoose = require('mongoose');
const Company = require('../models/Company');
var token = '';

describe('User Authentication', () => {
  it('should authenticate a user and return a JWT', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@demo.com', password: 'admin@demo.com' });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeTruthy();
    token = res.body.token;
  });

  it('should return 401 if email or password is incorrect', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'wrong@example.com', password: 'wrongpassword' });

    expect(res.status).toBe(401);
  });

  // Add more test cases for invalid input, error handling, etc.
});

// Test data for creating a new company
const testData = {
  name: 'Test Company',
  industry: 'Technology',
  location: 'Test City',
  website: 'https://www.testcompany.com',
  metaData: { someKey: 'someValue' }
};

describe('Company Endpoints', () => {
  // Clear the Company collection before each test
  // beforeEach(async () => {
  //   await Company.deleteMany();
  // });

  // Test for creating a new company
  it('should create a new company', async () => {
    const res = await request(app)
    .post('/api/companies/create')
    .set('Authorization', `${token}`)
    .send(testData);
    console.log("create company",res.text)
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual(testData.name);
  });

  // Test for getting all companies
  it('should get all companies', async () => {
    await Company.create(testData);
    const res = await request(app)
      .get('/api/companies')
      .set('Authorization', `${token}`);
      console.log("list company",res.text)
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // Test for getting a company by ID
  it('should get a company by ID', async () => {
    const company = await Company.create(testData);
    const res = await request(app)
      .get(`/api/companies/${company._id}`)
      .set('Authorization', `${token}`);
      console.log("get company by id",res.text)
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual(testData.name);
  });

  // Test for updating a company by ID
  it('should update a company by ID', async () => {
    const company = await Company.create(testData);
    const updatedData = { ...testData, name: 'Updated Company Name' };
    const res = await request(app)
      .put(`/api/companies/${company._id}`)
      .set('Authorization', `${token}`)
      .send(updatedData);
      console.log("update company by id",res.text)
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('Updated Company Name');
  });

  // Test for deleting a company by ID
  it('should delete a company by ID', async () => {
    const company = await Company.create(testData);
    const res = await request(app)
      .delete(`/api/companies/${company._id}`)
      .set('Authorization', `${token}`);
      console.log("delete company by id",res.text)

    expect(res.statusCode).toEqual(200);
  });
});

// Close the MongoDB connection after all tests are completed
afterAll(async () => {
  await mongoose.connection.close();
});
