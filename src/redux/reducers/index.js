import { combineReducers } from "redux";
import Login from "./auth/loginReducer";

const appReducer = combineReducers({
  Login,

});
const reducers = (state, action) => {
  return appReducer(state, action);
};
export default reducers;