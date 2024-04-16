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
      case 'FETCH_STAFF_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_STAFF_SUCCESS':
        return {
          ...state,
          staffList: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_STAFF_FAILURE':
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
  