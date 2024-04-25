import React, { useState } from 'react';
import endpoints from '../../js/apiEndpoints'; // Import endpoints from apiEndpoints.js
import axios from 'axios';


const FileUploadComponent = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!selectedFile) {
            return; // No file selected
        }

        try {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(selectedFile);

            fileReader.onload = async () => {
                const fileData = fileReader.result.split(',')[1]; // Extract base64 encoded file data
                const fileMetadata = {
                    filename: selectedFile.name,
                    contentType: selectedFile.type,
                    data: fileData
                };

                const response = await axios.post(endpoints.jobFiles.create, fileMetadata);
                const fileid = response.data.id
                console.log("file upload response",response,fileid)
                window.localStorage.fileid  = fileid

                if (response.status === 201) {
                    setUploadStatus('File uploaded successfully');

                } else {
                    setUploadStatus('File upload failed');
                }
            };
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadStatus('File upload failed');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload File</button>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default FileUploadComponent;
