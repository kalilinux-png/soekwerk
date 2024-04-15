// apiEndpoints.js

const API_BASE_URL = process.env.REACT_APP_ENV === 'production'  ? 'https://soekwerk.onrender.com' : 'http://localhost:5000'; // Update with your actual API base URL

const endpoints = {
  auth: {
    login: `${API_BASE_URL}/api/auth/login`,
    register: `${API_BASE_URL}/api/auth/staff/register`,
  },
  profile: {
    update: `${API_BASE_URL}/api/auth/profile/update`,
    password: `${API_BASE_URL}/api/auth/profile/password`,
  },
  staff: {
    list: `${API_BASE_URL}/api/staff/`,
    create: `${API_BASE_URL}/api/staff/create`,
    update: (staffId) => `${API_BASE_URL}/api/staff/${staffId}`,
  },
  companies: {
    list: `${API_BASE_URL}/api/companies/`,
    create: `${API_BASE_URL}/api/companies/create`,
    getById: (companyId) => `${API_BASE_URL}/api/companies/${companyId}`,
    update: (companyId) => `${API_BASE_URL}/api/companies/${companyId}`,
    delete: (companyId) => `${API_BASE_URL}/api/companies/${companyId}`,
  },
  jobs: {
    create: `${API_BASE_URL}/api/jobs/create`,
    update: (jobId) => `${API_BASE_URL}/api/jobs/${jobId}/update`,
    delete: (jobId) => `${API_BASE_URL}/api/jobs/${jobId}/delete`,
    list: `${API_BASE_URL}/api/jobs/list`,
    downloadExcel: `${API_BASE_URL}/api/jobs/download-excel`,
    uploadExcel: `${API_BASE_URL}/api/jobs/upload-excel`,
  },
  jobFiles: {
    create: `${API_BASE_URL}/api/jobFiles/`,
    getById: (jobFileId) => `${API_BASE_URL}/api/jobFiles/${jobFileId}`,
    update: (jobFileId) => `${API_BASE_URL}/api/jobFiles/${jobFileId}`,
    delete: (jobFileId) => `${API_BASE_URL}/api/jobFiles/${jobFileId}`,
  },
  user: {
    list: `${API_BASE_URL}/api/user/`,
    getById: (userId) => `${API_BASE_URL}/api/user/${userId}`,
    create: `${API_BASE_URL}/api/user/`,
    update: (userId) => `${API_BASE_URL}/api/user/${userId}`,
    delete: (userId) => `${API_BASE_URL}/api/user/${userId}`,
  },
  forgotPassword: {
    reset: `${API_BASE_URL}/api/forgot-password`,
  },
  resetPassword: {
    reset: `${API_BASE_URL}/api/reset-password`,
  },
};

module.exports =  endpoints;
