import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { useNavigate } from "react-router-dom";

export const login = async (dispatch, user, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispatch(loginFailure());
  }
};
