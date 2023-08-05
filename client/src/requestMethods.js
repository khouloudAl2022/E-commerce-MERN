import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTdmOGM3MWY4ZTExMTkwZDBhMzU1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTIzNTQ2NywiZXhwIjoxNjkxMjM1NjQ3fQ.0WmJT8ceISOeaC2NsO1QcrbMQbxikpQMSk154aCRWdY";
const BASE_URL = "http://localhost:5000/api/";

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
