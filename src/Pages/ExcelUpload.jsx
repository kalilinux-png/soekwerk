import React, { useState } from 'react';
import axios from 'axios';

const ExcelUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:5000/api/jobs/upload-excel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTlmYzYxMzczYjMzZDQ5ZDNiNjRiMCIsInJvbGUiOiJhZG1pbiIsInBlcm1pc3Npb25zIjpbImxpc3Rfam9icyIsImNyZWF0ZV9qb2IiLCJ1cGRhdGVfam9iIiwiZGVsZXRlX2pvYiJdLCJpYXQiOjE3MTMwMDg1NTgsImV4cCI6MTcxMzAxMjE1OH0.TMX1uFSfMbuZ9DmbIMljQhZYC4ty_zli_zgyqBsYtI4",
        }
      });

      console.log('Upload successful:', response.data);
      alert('Excel file uploaded successfully');
    } catch (error) {
      console.error('Error uploading Excel file:', error);
      alert('Error uploading Excel file. Please try again.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Excel</button>
    </div>
  );
};

export default ExcelUploader;
