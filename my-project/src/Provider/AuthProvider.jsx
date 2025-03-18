import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext= createContext();

const AuthProvider = ({children}) => {

    const lisa='Tajmilur';
    const [user, setUser]=useState({
        name: 'Tajmilur',
        email:'tajmilurrahman91@gmail.com',
    });


    const authInfo={
        lisa,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;