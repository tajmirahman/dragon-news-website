
import { Link} from 'react-router-dom';
import userLogo from '../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navber = () => {
    const {user}=useContext(AuthContext);
    // console.log(name)
    return (
        <div className='flex justify-between items-center'>

            <div>{user && user.name}</div>

            <div className='space-x-3'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/carrer'}>Carrer</Link>
            </div>

            <div className='flex justify-center items-center gap-2'>
                <img src={userLogo} alt="" />
                <Link to={'/auth/login'} className='btn bg-[#403F3F] text-white'>Login</Link>
            </div>
            
        </div>
    );
};

export default Navber;