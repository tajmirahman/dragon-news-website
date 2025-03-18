import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber';

const AuthLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto py-3'>
                <Navber />
            </header>
            <Outlet />
        </div>
    );
};

export default AuthLayout;