import { combineReducers } from "redux";
import authReducer from "./authReducer";
import resumeReducer from "./resumeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  resume: resumeReducer,
});

export default rootReducer;
