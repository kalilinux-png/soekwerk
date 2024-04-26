import axios from 'axios'; // Make sure to install axios using npm or yarn
import endpoints from './apiEndpoints'; // Import the endpoints from apiEndpoints.js

const API_BASE_URL = 'https://localhost:5000'; // Update with your actual API base URL

const apiService = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const ApiService = {
    auth: {
        login: async (credentials) => {
            try {
                const response = await apiService.post(endpoints.auth.login, credentials);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Login failed');
            }
        },
        register: async (userData) => {
            try {
                const response = await apiService.post(endpoints.auth.register, userData);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Registration failed');
            }
        },
    },
    profile: {
        update: async (token, profileData) => {
            try {
                const response = await apiService.put(endpoints.profile.update, profileData, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Profile update failed');
            }
        },
        updatePassword: async ( passwordData) => {
            try {
                const response = await apiService.put(endpoints.profile.password, passwordData, {
                });
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Password update failed');
            }
        },
    },
    staff: {
        list: async () => {
            try {
                const response = await apiService.get(endpoints.staff.list);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error fetching staff list');
            }
        },
        create: async (staffData) => {
            try {
                const response = await apiService.post(endpoints.staff.create, staffData);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error creating staff');
            }
        },
        update: async (staffId, staffData) => {
            try {
                const response = await apiService.put(endpoints.staff.update(staffId), staffData);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error updating staff');
            }
        },
    },
    companies: {
        list: async () => {
            try {
                const response = await apiService.get(endpoints.companies.list);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error fetching companies list');
            }
        },
        create: async (companyData) => {
            try {
                const response = await apiService.post(endpoints.companies.create, companyData);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error creating company');
            }
        },
        getById: async (companyId) => {
            try {
                const response = await apiService.get(endpoints.companies.getById(companyId));
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error fetching company by ID');
            }
        },
        update: async (companyId, companyData) => {
            try {
                const response = await apiService.put(endpoints.companies.update(companyId), companyData);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error updating company');
            }
        },
        delete: async (companyId) => {
            try {
                const response = await apiService.delete(endpoints.companies.delete(companyId));
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error deleting company');
            }
        },
    },
    jobs: {
        create: async (jobData) => {
            try {
                const response = await apiService.post(endpoints.jobs.create, jobData);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error creating job');
            }
        },
        update: async (jobId, jobData) => {
            try {
                const response = await apiService.put(endpoints.jobs.update(jobId), jobData);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error updating job');
            }
        },
        delete: async (jobId) => {
            try {
                const response = await apiService.delete(endpoints.jobs.delete(jobId));
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error deleting job');
            }
        },
        list: async () => {
            try {
                const response = await apiService.get(endpoints.jobs.list);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error fetching jobs list');
            }
        },
        downloadExcel: async () => {
            try {
                const response = await apiService.get(endpoints.jobs.downloadExcel);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error downloading Excel');
            }
        },
        uploadExcel: async (fileData) => {
            try {
                const response = await apiService.post(endpoints.jobs.uploadExcel, fileData);
                return response.data;
            } catch (error) {
                throw new Error(error.response.data.message || 'Error uploading Excel');
            }
        },
    },
    // Add more sections for other API endpoints as needed
};

export default ApiService;
