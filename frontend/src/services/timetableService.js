import axios from "axios";

const API =
  "http://localhost:5000/api/timetable";

export const getClasses = () =>
  axios.get(API);

export const addClass = (data) =>
  axios.post(API, data);

export const deleteClass = (id) =>
  axios.delete(`${API}/${id}`);