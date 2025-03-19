import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext= createContext();

const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const [user, setUser]=useState(null);
    console.log(user)

    const createSignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo={
        user,
        setUser,
        createSignUp
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        }
    },[auth])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;