import React, { useState } from "react";
import endpoints from "../../js/apiEndpoints"; // Import endpoints from apiEndpoints.js
import axios from "axios";
import { PiUploadBold } from "react-icons/pi";


const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

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
        const fileData = fileReader.result.split(",")[1]; // Extract base64 encoded file data
        const fileMetadata = {
          filename: selectedFile.name,
          contentType: selectedFile.type,
          data: fileData,
        };

        const response = await axios.post(
          endpoints.jobFiles.create,
          fileMetadata
        );
        const fileid = response.data.id;
        console.log("file upload response", response, fileid);
        window.localStorage.fileid = fileid;

        if (response.status === 201) {
          setUploadStatus("File uploaded successfully");
        } else {
          setUploadStatus("File upload failed");
        }
      };
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("File upload failed");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-end mt-2">
        <label className="uppercase mb-1 text-[0.8rem] lg:text-[0.9rem] font-semibold ">
        Upload File{" "}
        </label>
        <form className="max-w-sm relative">
          <label
            htmlFor="file-input"
            className="mb-0 w-full inline-flex items-center px-4 py-2 bg-[#fff] border border-gray-200 shadow-sm rounded-lg text-sm cursor-pointer hover:bg-gray-300 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:border-blue-500 focus-within:ring-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          >
            <PiUploadBold className="h-6 w-6 mr-2" />
          </label>
          <input
            type="file"
            name="file-input"
            id="file-input"
            className="hidden"
            onChange={handleFileChange}
          />
          {/* {fileName && <span className='absolute top-2.5 lg:left-[30%] lg:text-[0.7rem]'>{fileName}</span>} */}
        </form>
      </div>

      {/* <button onClick={handleFileUpload}>Upload File</button> */}
      {uploadStatus && <p>{uploadStatus}</p>}
    </>
  );
};

export default FileUploadComponent;
