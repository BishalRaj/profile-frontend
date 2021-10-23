import axios from "axios";
import { RESUME_SUCCESS } from "./types";

export function AddResume(data, resume, uid) {
  return function (dispatch) {
    axios
      .post("/resume", { data, uid })
      .then((response) => {
        if (
          resume.resume === undefined ||
          resume.resume.length === undefined ||
          resume.resume.length <= 0
        ) {
          dispatch({
            type: RESUME_SUCCESS,
            payload: [response.data.resume],
          });
        } else if (resume.resume) {
          dispatch({
            type: RESUME_SUCCESS,
            payload: [...resume.resume, response.data.resume],
          });
        }
      })
      .catch((err) => console.log(err));
  };
}

export function UpdateResume(data, index) {
  return function (dispatch) {
    axios.put("/resume", { data });
  };
}
