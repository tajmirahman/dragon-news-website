import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber';

const AuthLayout = () => {
    return (
        <div className='font-poppins bg-[#F3F3F3]'>
            <header className='w-11/12 mx-auto py-3'>
                <Navber />
            </header>
            <Outlet />
        </div>
    );
};

export default AuthLayout;