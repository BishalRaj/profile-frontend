import {
  RESUME_SUCCESS,
  INITIALIZE_RESUME,
  RESUME_CLEAR,
} from "../Actions/types";

const initialState = {
  resume: {},
};

function resumeReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_RESUME: {
      return {
        ...state,
        resume: action.payload,
      };
    }
    case RESUME_SUCCESS: {
      return {
        ...state,
        resume: action.payload,
      };
    }
    case RESUME_CLEAR: {
      return {
        ...state,
        resume: {},
      };
    }

    default:
      return state;
  }
}

export default resumeReducer;
