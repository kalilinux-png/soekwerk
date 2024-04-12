import { combineReducers } from "redux";

const appReducer = combineReducers({

});
const reducers = (state, action) => {
  return appReducer(state, action);
};
export default reducers;