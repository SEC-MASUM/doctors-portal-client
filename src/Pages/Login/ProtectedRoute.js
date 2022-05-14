import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import Loading from "../Shared/Loading/Loading";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const location = useLocation();

  // This loading is important to avoid error
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;