import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../pages/LoadingPage';

const PrivateRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext);

    const location=useLocation();

    console.log(user);

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    );
};

export default PrivateRoutes;