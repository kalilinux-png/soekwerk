const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const JobFile = require('../models/JobFile');


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

  // Add more test cases for invalid input, error handling, etc.
});
// Test data for creating a new JobFile
const testData = {
  filename: 'test-file.pdf',
  contentType: 'application/pdf',
  data: Buffer.from('Test file content')
};

// Generate a token for authentication

describe('JobFile Endpoints', () => {
  // Clear the JobFile collection before each test
  // beforeEach(async () => {
  //   await JobFile.deleteMany();
  // });

  // Test for creating a new JobFile
  it('should create a new JobFile', async () => {
    const res = await request(app)
      .post('/api/jobFiles')
      .set('Authorization', `${token}`)
      .send(testData);
    expect(res.statusCode).toEqual(201);
    expect(res.body.filename).toEqual(testData.filename);
  });

  // Test for getting all JobFiles
  it('should get all JobFiles', async () => {
    await JobFile.create(testData);
    const res = await request(app)
      .get('/api/jobFiles')
      .set('Authorization', `${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // Test for getting a JobFile by ID
  it('should get a JobFile by ID', async () => {
    const jobFile = await JobFile.create(testData);
    const res = await request(app)
      .get(`/api/jobFiles/${jobFile._id}`)
      .set('Authorization', `${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.filename).toEqual(testData.filename);
  });

  // Test for updating a JobFile by ID
  it('should update a JobFile by ID', async () => {
    const jobFile = await JobFile.create(testData);
    const updatedData = { ...testData, filename: 'updated-test-file.pdf' };
    const res = await request(app)
      .put(`/api/jobFiles/${jobFile._id}`)
      .set('Authorization', `${token}`)
      .send(updatedData);
    expect(res.statusCode).toEqual(200);
    expect(res.body.filename).toEqual('updated-test-file.pdf');
  });

  // Test for deleting a JobFile by ID
  it('should delete a JobFile by ID', async () => {
    const jobFile = await JobFile.create(testData);
    const res = await request(app)
      .delete(`/api/jobFiles/${jobFile._id}`)
      .set('Authorization', `${token}`);
    expect(res.statusCode).toEqual(200);
  });
});

// Close the MongoDB connection after all tests are completed
afterAll(async () => {
  await mongoose.connection.close();
});
