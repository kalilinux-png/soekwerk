// staffReducer.js

// Initial state for the staff slice
const initialState = {
    staffList: [],
    loading: false,
    error: null,
  };
  
  // Reducer function for the staff slice
  const staffReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'STAFF_FETCH_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'STAFF_FETCH_SUCCESS':
        return {
          ...state,
          staffList: action.payload,
          loading: false,
          error: null,
        };
      case 'STAFF_FETCH_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      // Add cases for other staff-related actions here
      default:
        return state;
    }
  };
  
  export default staffReducer;
  