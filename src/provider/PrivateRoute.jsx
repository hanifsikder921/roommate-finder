import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from './../components/Loading/Loading';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();



    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {

        return children;
    }
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;