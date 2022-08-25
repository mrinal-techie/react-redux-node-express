import { combineReducers } from "redux";
import usersReducers from "./userReducer";

const rootReducer = combineReducers({
  data: usersReducers,
});

export default rootReducer;