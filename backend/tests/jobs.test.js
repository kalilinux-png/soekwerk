
// tests/jobs.test.js
const request = require('supertest');
const app = require('../server'); // Assuming server.js is the entry point of your application
var adminToken = ""

describe('User Authentication', () => {
    it('should authenticate a user and return a JWT', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: "test@example.com", password: 'password123' });
        console.log("response for user authentication", res.text)

        expect(res.status).toBe(200);
        expect(res.body.token).toBeTruthy();
        adminToken = res.body.token;
        console.log("Admin token", adminToken)
    });

    it('should return 401 if email or password is incorrect', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: 'wrong@example.com', password: 'wrongpassword' });
        console.log("response", res.text)

        expect(res.status).toBe(400);
    });

    // Add more test cases for invalid input, error handling, etc.
});

describe('Jobs Creation Route', () => {
    it('should create a new job successfully', async () => {
        const newJob = {
            title: 'Software Engineer',
            description: 'Full-time software engineer position',
            // Add other job details
        };

        const res = await request(app)
            .post('/api/jobs/create')
            .set('Authorization', `Bearer ${adminToken}`)
            .send(newJob);

        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
        expect(res.body.message).toBe('Job listing created successfully');
        // Additional assertions for created job data
    });

    it('should return 401 if user is not authenticated as admin', async () => {
        const newJob = {
            title: 'Software Engineer',
            description: 'Full-time software engineer position',
            // Add other job details
        };

        const res = await request(app)
            .post('/api/jobs/create')
            .send(newJob);

        expect(res.status).toBe(401);
        expect(res.body.success).toBe(false);
        expect(res.body.message).toBe('Unauthorized');
    });

    // Add more test cases for edge cases, validation, etc.
});


describe('Jobs Update Route', () => {
    it('should update a job successfully', async () => {
        const updatedJobData = {
            title: 'Updated Job Title',
            description: 'Updated job description',
            // Add other fields to update
        };

        const jobIdToUpdate = '661533159fb8b659c4669672'; // Replace with valid job ID

        const res = await request(app)
            .put(`/api/jobs/${jobIdToUpdate}/update`)
            .set('Authorization', `Bearer ${adminToken}`)
            .send(updatedJobData);

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.message).toBe('Job updated successfully');
        // Additional assertions for updated job data
    });

    it('should return 401 if user is not authenticated as admin', async () => {
        const updatedJobData = {
            title: 'Updated Job Title',
            description: 'Updated job description',
            // Add other fields to update
        };

        const jobIdToUpdate = '123abc'; // Replace with valid job ID

        const res = await request(app)
            .put(`/api/jobs/${jobIdToUpdate}/update`)
            .send(updatedJobData);

        expect(res.status).toBe(401);
        expect(res.body.success).toBe(false);
        expect(res.body.message).toBe('Unauthorized');
    });

    // Add more test cases for edge cases, validation, etc.
});


describe('Jobs Deletion Route', () => {
    it('should delete a job successfully', async () => {
      const jobIdToDelete = '661533159fb8b659c4669672'; // Replace with valid job ID
  
      const res = await request(app)
        .delete(`/api/jobs/${jobIdToDelete}`)
        .set('Authorization', `Bearer ${adminToken}`);
  
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe('Job deleted successfully');
    });
  
    it('should return 401 if user is not authenticated as admin', async () => {
      const jobIdToDelete = '123abc'; // Replace with valid job ID
  
      const res = await request(app)
        .delete(`/api/jobs/${jobIdToDelete}`);
  
      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe('Unauthorized');
    });
  
    // Add more test cases for edge cases, validation, etc.
  });
  