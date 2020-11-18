import { getAttendance, updateAttendance } from "./urls";
import axios from "axios";

export const GetAttendanceAPI = (_id) => {
  let url = getAttendance;
  if (_id) {
    url = `${getAttendance}?_id=${_id}`;
  }
  try {
    return axios
      .get(url, {
        headers: { "content-type": "application/json" },
      })
      .then((response) => {
        return response;
      });
  } catch (err) {
    return err;
  }
};

export const updateAttendanceAPI = (_id, value) => {
  try {
    return axios
      .post(
        updateAttendance,
        { _id, value },
        { headers: { "content-type": "application/json" } }
      )
      .then((response) => {
        return response;
      });
  } catch (err) {
    return err;
  }
};
