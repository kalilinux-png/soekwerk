// authReducer.js

// Initial state for the authentication slice
const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };
  
  // Reducer function for the authentication slice
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          loading: false,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          loading: false,
          error: action.payload,
        };
      // Add cases for other authentication-related actions here
      default:
        return state;
    }
  };
  
  export default authReducer;
  