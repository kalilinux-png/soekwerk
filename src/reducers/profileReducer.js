// profileReducer.js

// Initial state for the profile slice
const initialState = {
    profile: null,
    loading: false,
    error: null,
  };
  
  // Reducer function for the profile slice
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PROFILE_UPDATE_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'PROFILE_UPDATE_SUCCESS':
        return {
          ...state,
          profile: action.payload,
          loading: false,
          error: null,
        };
      case 'PROFILE_UPDATE_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      // Add cases for other profile-related actions here
      default:
        return state;
    }
  };
  
  export default profileReducer;
  