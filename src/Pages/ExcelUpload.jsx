import React, { useState,useEffect  } from 'react';
import axios from 'axios';
import { PiUploadBold } from "react-icons/pi";
import { uploadExcel } from '../actions/jobActions';

const ExcelUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
   
  };
  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await uploadExcel(formData)

      console.log('Upload successful:', response.message);
      alert('Excel file uploaded successfully');
    } catch (error) {
      console.error('Error uploading Excel file:', error);
      alert('Error uploading Excel file. Please try again.');
    }
  };

  return (
    <div className='flex flex-col justify-end'>
    <label className='uppercase text-[1rem] font-semibold '>Upload File</label>
      <form className="max-w-sm relative">
        <label htmlFor="file-input" className="w-full inline-flex items-center px-4 py-2 bg-[#fff] border border-gray-200 shadow-sm rounded-lg text-sm cursor-pointer hover:bg-gray-300 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:border-blue-500 focus-within:ring-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
          <PiUploadBold className="h-6 w-6 mr-2" />
        </label>
        <input type="file" name="file-input" id="file-input" className="hidden" onChange={handleFileChange} />
        {/* {fileName && <span className='absolute top-2.5 lg:left-[30%] lg:text-[0.7rem]'>{fileName}</span>} */}
      </form>            
    </div>

    // <div>
    //   <input type="file" onChange={handleFileChange} />
    //   <button onClick={handleUpload}>Upload Excel</button>
    // </div>
  );
};

export default ExcelUploader;
