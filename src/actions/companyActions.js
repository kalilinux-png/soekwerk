// actions/companyActions.js

import axios from 'axios';
import endpoints from './apiEndpoints'; // Import endpoints from apiEndpoints.js

// Action types
export const FETCH_COMPANIES_REQUEST = 'FETCH_COMPANIES_REQUEST';
export const FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS';
export const FETCH_COMPANIES_FAILURE = 'FETCH_COMPANIES_FAILURE';

export const ADD_COMPANY_REQUEST = 'ADD_COMPANY_REQUEST';
export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';
export const ADD_COMPANY_FAILURE = 'ADD_COMPANY_FAILURE';

export const UPDATE_COMPANY_REQUEST = 'UPDATE_COMPANY_REQUEST';
export const UPDATE_COMPANY_SUCCESS = 'UPDATE_COMPANY_SUCCESS';
export const UPDATE_COMPANY_FAILURE = 'UPDATE_COMPANY_FAILURE';

export const DELETE_COMPANY_REQUEST = 'DELETE_COMPANY_REQUEST';
export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';
export const DELETE_COMPANY_FAILURE = 'DELETE_COMPANY_FAILURE';

// Action creators
export const fetchCompanies = () => async (dispatch) => {
  dispatch({ type: FETCH_COMPANIES_REQUEST });
  try {
    const response = await axios.get(endpoints.companies.list);
    dispatch({ type: FETCH_COMPANIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_COMPANIES_FAILURE, payload: error.message });
  }
};

export const addCompany = (companyData) => async (dispatch) => {
  dispatch({ type: ADD_COMPANY_REQUEST });
  try {
    const response = await axios.post(endpoints.companies.create, companyData);
    dispatch({ type: ADD_COMPANY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_COMPANY_FAILURE, payload: error.message });
  }
};

export const updateCompany = (companyId, companyData) => async (dispatch) => {
  dispatch({ type: UPDATE_COMPANY_REQUEST });
  try {
    const response = await axios.put(endpoints.companies.update(companyId), companyData);
    dispatch({ type: UPDATE_COMPANY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_COMPANY_FAILURE, payload: error.message });
  }
};

export const deleteCompany = (companyId) => async (dispatch) => {
  dispatch({ type: DELETE_COMPANY_REQUEST });
  try {
    await axios.delete(endpoints.companies.delete(companyId));
    dispatch({ type: DELETE_COMPANY_SUCCESS, payload: companyId });
  } catch (error) {
    dispatch({ type: DELETE_COMPANY_FAILURE, payload: error.message });
  }
};
