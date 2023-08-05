import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);
  return <div>{user ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
