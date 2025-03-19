import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

    const {createSignUp}=useContext(AuthContext);

    const handleSubmit=(e)=>{
        e.preventDefault();

        const form= new FormData(e.currentTarget);
        const name= form.get('name');
        const photo= form.get('photo');
        const email= form.get('email');
        const password= form.get('password');
        console.log({name,photo,email,password});

        createSignUp(email, password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log("Error",error.message)
        })
    }


    return (
        <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card bg-base-100  w-full max-w-md shrink-0">
                <h1 className="text-center text-2xl font-semibold mt-3">Register your account</h1>
                <div className="card-body ">
                    <form onClick={handleSubmit}>
                        <fieldset className="fieldset mb-2">
                            <label className="fieldset-label">Name</label>
                            <input type="text" name="name" className="input w-full" placeholder="Name" />

                            <label className="fieldset-label">Photo Url</label>
                            <input type="text" name="photo" className="input w-full" placeholder="Photo Url" />

                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input w-full" placeholder="Email" />

                            <label className="fieldset-label">Password</label>
                            <input type="password"  name="password" className="input w-full" placeholder="Password" />


                            <button className="btn btn-neutral mt-4">Register</button>

                        </fieldset>
                        <p>Allready Have an Account? Please <Link to={'/auth/login'} className="text-red-700">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;