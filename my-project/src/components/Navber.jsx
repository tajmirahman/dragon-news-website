
import { Link } from 'react-router-dom';
import userLogo from '../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);




    return (
        <div className='flex justify-between items-center'>

            <div>{user && user.email}</div>

            <div className='space-x-3'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/carrer'}>Carrer</Link>
                <Link to={'/dev'}>Dev Dragon</Link>
            </div>

            <div className='flex justify-center items-center gap-2'>
                <div>
                    {
                        user && user?.email ?
                        <div>
                            <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" />
                            <p>{user?.displayName}</p>
                        </div>
                        
                        :
                        <img src={userLogo} alt="" />
                    }
                    
                </div>
                <div>
                    {
                        user && user.email ?
                            <button onClick={logOut} className='btn bg-[#403F3F] text-white'>Log-Out</button>
                            : <Link to={'/auth/login'} className='btn bg-[#403F3F] text-white'>Login</Link>
                    }
                </div>

            </div>

        </div>
    );
};

export default Navber;