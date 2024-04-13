const request = require('supertest');
const app = require('../server'); // Assuming server.js is the entry point of your application
var adminToken = "";
const mongoose = require("mongoose")



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

describe('Jobs Creation Route', () => {
    it('should create a new job successfully', async () => {
        const newJob = {
            title: 'Software Engineer',
            description: 'Full-time software engineer position',
            requirements: ['BSc in Computer Science', '2+ years of experience'],
            sector: 'Technology',
            industry: 'Software',
            salary: 'Competitive',
            country: 'USA',
            companyName: 'Example Inc.',
            region: 'California',
            reference: 'SE2024',
            expireDate: '2024-06-30',
            webLink: 'https://example.com/jobs'
        };

        const res = await request(app)
            .post('/api/jobs/create')
            .set('Authorization', `${adminToken}`)
            .send(newJob);

        expect(res.status).toBe(201);
        expect(res.body.msg).toBe('Job listing created successfully');
        expect(res.body.jobListing.title).toBe(newJob.title);
        // Add more assertions for other job details
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
    });
});

describe('Jobs Update Route', () => {
    it('should update a job successfully', async () => {
        const updatedJobData = {
            title: 'Updated Job Title',
            description: 'Updated job description',
            requirements: ['MSc in Computer Science', '5+ years of experience'],
            // Add other fields to update
        };

        const jobIdToUpdate = '661533159fb8b659c4669672'; // Replace with valid job ID

        const res = await request(app)
            .put(`/api/jobs/${jobIdToUpdate}/update`)
            .set('Authorization', `${adminToken}`)
            .send(updatedJobData);

        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('Job listing updated successfully');
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
    });
});


describe('Jobs Deletion Route', () => {
    it('should delete a job successfully', async () => {
        const jobIdToDelete = '661533159fb8b659c4669672'; // Replace with valid job ID
  
        const res = await request(app)
            .delete(`/api/jobs/${jobIdToDelete}/delete`)
            .set('Authorization', `${adminToken}`);
  
        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('Job listing deleted successfully');
    });
  
    it('should return 401 if user is not authenticated as admin', async () => {
        const jobIdToDelete = '123abc'; // Replace with valid job ID
  
        const res = await request(app)
            .delete(`/api/jobs/${jobIdToDelete}/delete`);
  
        expect(res.status).toBe(401);
    });
});


afterAll(done => {
    mongoose.connection.close()
    done();
});