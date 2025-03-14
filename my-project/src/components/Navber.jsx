import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className='flex justify-between items-center'>

            <div></div>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/carrer'}>Carrer</Link>
            </div>
            <div></div>
            
        </div>
    );
};

export default Navber;