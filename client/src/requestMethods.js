import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

export const publicRequest = axios.create({ baseURL: BASE_URL });
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTdmOGM3MWY4ZTExMTkwZDBhMzU1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjY0OTk3OSwiZXhwIjoxNjkyNjUwMTU5fQ.fApZDUS-wRNEQUXFkW2kfDPXf54ocuZ1ss9WQAZz1B8";

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
