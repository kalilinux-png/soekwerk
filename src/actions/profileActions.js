// actions/profileActions.js

import axios from 'axios';
import endpoints from './apiEndpoints'; // Import endpoints from apiEndpoints.js

// Action types
export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

export const UPDATE_PASSWORD_REQUEST = 'UPDATE_PASSWORD_REQUEST';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_FAILURE = 'UPDATE_PASSWORD_FAILURE';

// Action creators
export const updateProfile = (token, profileData) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const response = await axios.put(endpoints.profile.update, profileData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error.message });
  }
};

export const updatePassword = (token, passwordData) => async (dispatch) => {
  dispatch({ type: UPDATE_PASSWORD_REQUEST });
  try {
    const response = await axios.put(endpoints.profile.password, passwordData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_PASSWORD_FAILURE, payload: error.message });
  }
};
