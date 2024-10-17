import React, { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import loader from "../assets/images/loading/lg.gif";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <img src={loader} alt="" />;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
