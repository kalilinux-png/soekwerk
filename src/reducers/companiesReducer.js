// companiesReducer.js

// Initial state for the companies slice
const initialState = {
    companyList: [],
    loading: false,
    error: null,
  };
  
  // Reducer function for the companies slice
  const companiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'COMPANIES_FETCH_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'COMPANIES_FETCH_SUCCESS':
        return {
          ...state,
          companyList: action.payload,
          loading: false,
          error: null,
        };
      case 'COMPANIES_FETCH_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      // Add cases for other company-related actions here
      default:
        return state;
    }
  };
  
  export default companiesReducer;
  