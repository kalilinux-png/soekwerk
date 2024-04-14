// store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // If using redux-thunk middleware
import rootReducer from './reducers'; // Import the root reducer or individual reducers

// Apply middleware if needed (e.g., redux-thunk)
const middleware = [thunk];

// Create the Redux store instance
const store = createStore(
  rootReducer, // Pass the root reducer or combined reducers
  applyMiddleware(...middleware) // Apply middleware to the store
);

export default store;
