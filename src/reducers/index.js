// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import companiesReducer from './companiesReducer';
import jobsReducer from './jobReduer';
import profileReducer from './profileReducer';
import staffReducer from './staffReducer';

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
    auth: authReducer,
    companies: companiesReducer,
    jobs: jobsReducer,
    profile: profileReducer,
    staff: staffReducer
});

export default rootReducer;
