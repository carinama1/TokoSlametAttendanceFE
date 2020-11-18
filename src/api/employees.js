import { addemployee, getAttendanceByEmployeeID } from "./urls";
import axios from "axios";

export const AddEmployeeAPI = ({ name, phone, payday }) => {
  try {
    return axios
      .post(
        addemployee,
        { name, phone, payday },
        { headers: { "content-type": "application/json" } }
      )
      .then((response) => {
        return response;
      });
  } catch (err) {
    return err;
  }
};

export const getAttendanceByEmployeeIDAPI = (employeeID) => {
  let url = getAttendanceByEmployeeID + "?employeeID=" + employeeID;
  try {
    return axios.get(url).then(({ data }) => {
      return data;
    });
  } catch (err) {
    return err;
  }
};
