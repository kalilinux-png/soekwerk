// jobsReducer.js

// Initial state for the jobs slice
const initialState = {
    jobList: [],
    loading: false,
    error: null,
  };
  
  // Reducer function for the jobs slice
  const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'JOBS_FETCH_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'JOBS_FETCH_SUCCESS':
        return {
          ...state,
          jobList: action.payload,
          loading: false,
          error: null,
        };
      case 'JOBS_FETCH_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      // Add cases for other job-related actions here
      default:
        return state;
    }
  };
  
  export default jobsReducer;
  