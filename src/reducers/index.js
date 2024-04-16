// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import companiesReducer from './companiesReducer';
import jobsReducer from './jobReduer';
import profileReducer from './profileReducer';
import staffReducer from './staffReducer';
import userReducer from './userReducer';

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
    auth: authReducer,
    companies: companiesReducer,
    jobs: jobsReducer,
    profile: profileReducer,
    staff: staffReducer,
    users: userReducer
});

export default rootReducer;
