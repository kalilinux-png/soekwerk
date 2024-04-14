// actions/jobActions.js

import axios from 'axios';
import endpoints from '../js/apiEndpoints'; // Import endpoints from apiEndpoints.js
// axios.defaults.withCredentials = true


// Fetch jobs
export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

// Add new job
export const ADD_JOB_REQUEST = 'ADD_JOB_REQUEST';
export const ADD_JOB_SUCCESS = 'ADD_JOB_SUCCESS';
export const ADD_JOB_FAILURE = 'ADD_JOB_FAILURE';

// Update job
export const UPDATE_JOB_REQUEST = 'UPDATE_JOB_REQUEST';
export const UPDATE_JOB_SUCCESS = 'UPDATE_JOB_SUCCESS';
export const UPDATE_JOB_FAILURE = 'UPDATE_JOB_FAILURE';

// Delete job
export const DELETE_JOB_REQUEST = 'DELETE_JOB_REQUEST';
export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS';
export const DELETE_JOB_FAILURE = 'DELETE_JOB_FAILURE';


export const fetchJobs = () => async (dispatch) => {
  dispatch({ type: FETCH_JOBS_REQUEST });
  try {
    const response = await axios.get(endpoints.jobs.list, { withCredentials: true });
    console.log("jobs response", response.data)
    dispatch({ type: FETCH_JOBS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_JOBS_FAILURE, payload: error.message });
  }
};

export const addJob = (jobData) => async (dispatch) => {
  dispatch({ type: ADD_JOB_REQUEST });
  try {
    const response = await axios.post(endpoints.jobs.create, jobData);
    dispatch({ type: ADD_JOB_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_JOB_FAILURE, payload: error.message });
  }
};

export const updateJob = (jobId, jobData) => async (dispatch) => {
  dispatch({ type: UPDATE_JOB_REQUEST });
  try {
    const response = await axios.put(endpoints.jobs.update(jobId), jobData);
    dispatch({ type: UPDATE_JOB_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_JOB_FAILURE, payload: error.message });
  }
};

export const deleteJob = (jobId) => async (dispatch) => {
  dispatch({ type: DELETE_JOB_REQUEST });
  try {
    await axios.delete(endpoints.jobs.delete(jobId));
    dispatch({ type: DELETE_JOB_SUCCESS, payload: jobId });
  } catch (error) {
    dispatch({ type: DELETE_JOB_FAILURE, payload: error.message });
  }
};
