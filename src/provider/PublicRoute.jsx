import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../components/Loading/Loading";



const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
   
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
