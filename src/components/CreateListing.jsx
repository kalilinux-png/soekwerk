import React, { useState, useEffect } from 'react'
import AgentDetails from './AgentDetails'
import { fetchJobs, downloadExcel, addJob } from "../actions/jobActions"
import { useSelector, useDispatch } from 'react-redux';
import ExcelUploader from '../Pages/ExcelUpload';
import FileUpload from "../components/FileUpload"
import dayjs from 'dayjs'; // Import dayjs library

const CreateListing = () => {
  const dispatch = useDispatch(); // Initializing useDispatch hook
  useEffect(() => {
    dispatch(fetchJobs());

  }, [dispatch])

  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    expiryDate: '',
    field: '',
    country: '',
    region: '',
    city: '',
    webLink: '',
    
  });

  const { title, description, companyName, expiryDate, field, country, region, city, webLink } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.jobFile = window.localStorage.fileid
    // Dispatch action to add job with form data
    dispatch(addJob(formData));
    // Reset form after submission
    // setFormData({
    //   title: '',
    //   description: "",
    //   companyName: '',
    //   expiryDate: '',
    //   field: '',
    //   country: '',
    //   region: '',
    //   city: '',
    //   webLink: ''
    // });
    dispatch(fetchJobs());

  }

  const [searchCriteria, setSearchCriteria] = useState('');
  const [searchReference, setSearchReference] = useState('');
  const jobsState = useSelector((state) => state.jobs.jobList);

  const filteredJobs = jobsState.filter((job) => {
    // console.log("job", job, searchCriteria, searchReference)
    if (searchCriteria === 'sub. Date') {
      return dayjs(job.createdAt).format('MMM DD, YYYY').toLowerCase().includes(searchReference.toLowerCase());
    } else if (searchCriteria === 'Vacancy') {
      return job?.title?.toLowerCase().includes(searchReference?.toLowerCase());
    } else if (searchCriteria === 'Company') {
      return job?.companyName?.toLowerCase().includes(searchReference?.toLowerCase());
    } else if (searchCriteria === 'Country') {
      return job?.country?.toLowerCase().includes(searchReference?.toLowerCase());
    } else if (searchCriteria === 'Region') {
      return job?.region?.toLowerCase().includes(searchReference?.toLowerCase());
    } else if (searchCriteria === 'Reference') {
      return job?.reference?.toLowerCase().includes(searchReference?.toLowerCase());
    } else if (searchCriteria === 'exp date') {
      return dayjs(job.expireDate).format('MMM DD, YYYY').toLowerCase().includes(searchReference.toLowerCase());
    }
    // Add other search criteria here
    return true;
  });

  return (
    <div className="w-full max-w-[1150px] mx-auto px-8">
      <AgentDetails />

      <div className="users flex flex-col py-8">
        <h1 className='uppercase text-[1.6rem] font-bold underline my-8'>Create Listing</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 gap-3">
            <div className='flex flex-col'>
              <label className='uppercase text-[1rem] font-semibold'>Vacancy Name</label>
              <input
                className='py-2 px-3 mt-2 rounded-md'
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-[1rem] font-semibold'>Job Description </label>
              <input
                className='py-2 px-3 mt-2 rounded-md'
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-[1rem] font-semibold'>Company Name</label>
              <input
                className='py-2 px-3 mt-2 rounded-md'
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-[1rem] font-semibold'>Expiry Date</label>
              <input
                className='py-2 px-3 mt-2 rounded-md'
                type="date"
                name="expireDate"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-[1rem] font-semibold'>Field</label>
              <select
                className='py-2 px-3 mt-2 rounded-md'
                name="sector"
                value={formData.field}
                onChange={handleChange}
              >
                <option value="">vxkj</option>
                <option value="">sdf</option>
                <option value="">fggbf</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-[1rem] font-semibold'>Country</label>
              <select
                className='py-2 px-3 mt-2 rounded-md'
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">vxkj</option>
                <option value="">sdf</option>
                <option value="">fggbf</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-[1rem] font-semibold'>City</label>
              <select
                className='py-2 px-3 mt-2 rounded-md'
                name="region"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="">vxkj</option>
                <option value="">sdf</option>
                <option value="">fggbf</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-[1rem] font-semibold'>Web Link</label>
              <input
                className='py-2 px-3 mt-2 rounded-md'
                type="text"
                name="webLink"
                value={formData.webLink}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col justify-end'>
              <button type="submit" className='py-1.5 px-14 mt-2 rounded-md text-[1.2rem] text-[#fff]  font-bold bg-[#9ad19f]'>Create</button>
            </div>
            <FileUpload />
            <ExcelUploader />
          </div>
        </form>
      </div>

      <div className="user-details ">
        <div className="search flex items-center justify-between gap-3 border-b-2 border-[#000] py-8">
          <div className="w-full max-w-[20rem] field flex flex-col">
            <label className='text-[0.9rem] font-bold' htmlFor="">Search Criteria</label>
            <select
              className='py-2 px-3 mt-2 rounded-md'
              name="search-criteria"
              id="search-criteria"
              value={searchCriteria}
              onChange={(e) => setSearchCriteria(e.target.value)}
            >
              <option value="sub. Date">sub. Date</option>
              <option value="Vacancy">Vacancy</option>
              <option value="Company">Company</option>
              <option value="Country">Country</option>
              <option value="Region">Region</option>
              <option value="Reference">Reference</option>
              <option value="exp date">exp date</option>
              {/* Add other search criteria options here */}
            </select>
          </div>

          <div className="w-full max-w-[20rem] field flex flex-col">
            <label className='text-[0.9rem] font-bold' htmlFor="">Search Reference</label>
            <input
              className='py-2 px-3 mt-2 rounded-md'
              type="search"
              placeholder='Type Reference'
              value={searchReference}
              onChange={(e) => setSearchReference(e.target.value)}
            />          </div>

          <button className='py-1.5 px-2 w-full max-w-[200px] mt-2 rounded-md text-[1.1rem] text-[#fff] mb-[-1.15rem] font-semibold bg-[#1ea52b]'>Search</button>

          <button className='py-1.5 px-2 w-full max-w-[200px] mt-2 rounded-md text-[1.1rem] text-[#fff] mb-[-1.15rem] font-semibold bg-[#917dcd]' onClick={() => { console.log("butonclick"); downloadExcel() }}>Download Excel</button>
        </div>

        <div className='h-[62vh] overflow-auto'>
          <table className='w-full my-8'>
            <thead className='border-b-2 border-[#000]'>

              <tr>
                <th className='text-nowrap py-4 px-7 uppercase'>sub. Date</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Vacancy </th>
                <th className='text-nowrap py-4 px-7 uppercase'>Company</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Country</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Region</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Reference</th>
                <th className='text-nowrap py-4 px-7 uppercase'>exp date</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Link</th>
              </tr>
            </thead>

            <tbody>
              {/* // Render function */}
              {filteredJobs.map((job) => (
                <tr className='text-center' key={job.id}>
                  <td className='py-4 font-medium text-nowrap px-7 uppercase'>{dayjs(job.createdAt).format('MMM DD, YYYY')}</td>
                  <td className='py-4 font-medium text-nowrap px-7 uppercase'>{job.title}</td>
                  <td className='py-4 font-medium text-nowrap px-7 uppercase'>{job.companyName}</td>
                  <td className='py-4 font-medium text-nowrap px-7 uppercase'>{job.country}</td>
                  <td className='py-4 font-medium text-nowrap px-7 uppercase'>{job.region}</td>
                  <td className='py-4 font-medium text-nowrap px-7 uppercase'>{job.reference}</td>
                  <td className='py-4 font-medium text-nowrap px-7 uppercase'>{dayjs(job.expireDate).format('MMM DD, YYYY')}</td>
                  <td className='py-4 text-nowrap px-2 uppercase'>
                    <button className='w-full max-w-[150px] text-[#fff] text-[0.8rem] font-semibold rounded-md py-1 uppercase bg-[#1ea52B]' onClick={() => { window.open(job.webLink) }} >Link</button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CreateListing