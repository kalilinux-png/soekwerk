// actions/authActions.js

import axios from 'axios';
import endpoints from '../js/apiEndpoints'; // Import endpoints from apiEndpoints.js

// Action types
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const REGISTER_REQUEST = 'REGISTER_REQUEST';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';

const LOGOUT = 'LOGOUT';

// Action creators
export const login = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = (await axios.post(endpoints.auth.login, credentials))?.data;
    dispatch({ type: LOGIN_SUCCESS, payload: response.token });
    return response.token

  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
    throw error.message
  }
};

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await axios.post(endpoints.auth.register, userData);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message });
  }
};

export const logout = () => ({
  type: LOGOUT,
});

