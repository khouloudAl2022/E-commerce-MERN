// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const user = useSelector((state) => state.user.currentUser);
//   return <div>{user ? children : <Navigate to="/login" />}</div>;
// };

// export default PrivateRoute;

import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const isExpiredToken = (token) => {
  const decoded = jwt_decode(token);
  return Math.floor(new Date().getTime() / 1000) >= decoded.exp;
};
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token !== null) {
    const expire = isExpiredToken(token);
    if (expire) {
      toast.error("Token expired!");
      localStorage.removeItem("token");
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  } else {
    localStorage.removeItem("token");
    return <Navigate to="/login" />;
  }
};
export default PrivateRoute;
