import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const {signInUser}=useContext(AuthContext);


   

    return (


        <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card bg-base-100  w-full max-w-md shrink-0">
                <h1 className="text-center text-2xl font-semibold mt-3">Login your account</h1>
                <div className="card-body ">
                    <form >
                        <fieldset className="fieldset mb-2">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input w-full" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input w-full" placeholder="Password" />
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