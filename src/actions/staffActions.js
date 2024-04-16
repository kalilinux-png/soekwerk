// actions/staffActions.js

import axios from 'axios';
import endpoints from '../js/apiEndpoints'; // Import endpoints from apiEndpoints.js

// Action types
export const FETCH_STAFF_REQUEST = 'FETCH_STAFF_REQUEST';
export const FETCH_STAFF_SUCCESS = 'FETCH_STAFF_SUCCESS';
export const FETCH_STAFF_FAILURE = 'FETCH_STAFF_FAILURE';

export const ADD_STAFF_REQUEST = 'ADD_STAFF_REQUEST';
export const ADD_STAFF_SUCCESS = 'ADD_STAFF_SUCCESS';
export const ADD_STAFF_FAILURE = 'ADD_STAFF_FAILURE';

export const UPDATE_STAFF_REQUEST = 'UPDATE_STAFF_REQUEST';
export const UPDATE_STAFF_SUCCESS = 'UPDATE_STAFF_SUCCESS';
export const UPDATE_STAFF_FAILURE = 'UPDATE_STAFF_FAILURE';

export const DELETE_STAFF_REQUEST = 'DELETE_STAFF_REQUEST';
export const DELETE_STAFF_SUCCESS = 'DELETE_STAFF_SUCCESS';
export const DELETE_STAFF_FAILURE = 'DELETE_STAFF_FAILURE';

// Action creators
export const fetchStaff = () => async (dispatch) => {
  dispatch({ type: FETCH_STAFF_REQUEST });
  try {
    const response = await axios.get(endpoints.staff.list);
    dispatch({ type: FETCH_STAFF_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_STAFF_FAILURE, payload: error.message });
  }
};

export const addStaff = (staffData) => async (dispatch) => {
  dispatch({ type: ADD_STAFF_REQUEST });
  try {
    const response = await axios.post(endpoints.staff.create, staffData);
    dispatch({ type: ADD_STAFF_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_STAFF_FAILURE, payload: error.message });
  }
};

export const updateStaff = (staffId, staffData) => async (dispatch) => {
  dispatch({ type: UPDATE_STAFF_REQUEST });
  try {
    const response = await axios.put(endpoints.staff.update(staffId), staffData);
    dispatch({ type: UPDATE_STAFF_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_STAFF_FAILURE, payload: error.message });
  }
};

export const deleteStaff = (staffId) => async (dispatch) => {
  dispatch({ type: DELETE_STAFF_REQUEST });
  try {
    await axios.delete(endpoints.staff.update(staffId));
    dispatch({ type: DELETE_STAFF_SUCCESS, payload: staffId });
  } catch (error) {
    dispatch({ type: DELETE_STAFF_FAILURE, payload: error.message });
  }
};
