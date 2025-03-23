import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user}=useContext(AuthContext);
    console.log(user);
    if(user && user?.email){
        return children;
    }
    return (
        <Navigate to={'/auth/login'}></Navigate>
    );
};

export default PrivateRoutes;