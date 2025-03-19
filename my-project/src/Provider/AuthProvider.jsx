import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext= createContext();

const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const [user, setUser]=useState(null);

    const createSignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo={
        user,
        setUser,
        createSignUp
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;