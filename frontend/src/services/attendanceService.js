import axios from "axios";

const API = "http://localhost:5000/api/attendance";

export const getAttendance = () => axios.get(API);

export const addAttendance = (data) =>
  axios.post(API, data);

export const deleteAttendance = (id) =>
  axios.delete(`${API}/${id}`);