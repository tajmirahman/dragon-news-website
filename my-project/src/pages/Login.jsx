import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const {signInUser,setUser}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const [error, setError]=useState({});
    // console.log(location);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email= form.email.value;
        const password= form.password.value;

        console.log(email,password);

        signInUser(email,password)
        .then(res=>{
            setUser(res.user);
            navigate(location?.state ? location.state : '/');
        })
        .catch(err=>{
            setError({...error, login:err.message});
        })

    }

   

    return (


        <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card bg-base-100  w-full max-w-md shrink-0">
                <h1 className="text-center text-2xl font-semibold mt-3">Login your account</h1>
                <div className="card-body ">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset mb-2">
                            
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input w-full" placeholder="Email" />

                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input w-full" placeholder="Password" />
                            {
                                error.login && <p>{error.login}</p>
                            }
                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        <p>Don't Have an Account? Please <Link to={'/auth/register'} className="text-red-700">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Login;