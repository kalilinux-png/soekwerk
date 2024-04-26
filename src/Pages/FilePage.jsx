import React, { useState, useEffect } from 'react';
import endpoints from "../js/apiEndpoints";
import axios from 'axios';
import FileViewer from 'react-file-viewer';
import {Buffer} from 'buffer';



const FilePage = () => {
    const [fileData, setFileData] = useState(null);

    useEffect(() => {
        fetchFileData(); // Fetch file data when component mounts
    }, []);

    const fetchFileData = async () => {
        try {
            const fileId = window.localStorage.fileid;
            const response = await axios.get(endpoints.jobFiles.getById(fileId)); // Replace ':fileId' with the actual file ID
            setFileData(response.data); // Set file data received from the API
        } catch (error) {
            console.error('Error fetching file data:', error);
        }
    };

    return (
        <div>
            <h1>View File</h1>
            {fileData ? (
                <div>
                    <h2>Filename: {fileData.filename}</h2>
                    <p>Content Type: {fileData.contentType}</p>
                    {/* Use react-file-viewer component to display the file */}
                    {fileData.data && (
                        <FileViewer
                            fileType={fileData.contentType.split("/")[1]}
                            filePath={`data:${fileData.contentType};base64,${new Buffer.from(fileData.data.data).toString("base64")}`}
                        />
                    )}
                </div>
            ) : (
                <p>Loading file...</p>
            )}
        </div>
    );
};

export default FilePage;
