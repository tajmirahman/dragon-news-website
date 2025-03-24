import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext= createContext();

const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const [user, setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    // console.log(loading)

    const createSignUp=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile=(updateData)=>{
        return updateProfile(auth.currentUser, updateData);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    const authInfo={
        user,
        setUser,
        createSignUp,
        signInUser,
        loading,
        updateUserProfile,
        logOut
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
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