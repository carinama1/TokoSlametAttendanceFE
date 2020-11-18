const FIXED_URL = process.env.URL || "http://localhost:4009/api/v1";

export const addemployee = FIXED_URL + "/employees/add";
export const getAttendance = FIXED_URL + "/attendance/get";
export const updateAttendance = FIXED_URL + "/attendance/update";
export const getAttendanceByEmployeeID =
  FIXED_URL + "/attendance/getbyemployeeid";
