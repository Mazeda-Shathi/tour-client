import React, { createContext } from 'react';
import UseAuth from '../share/hook/UseAuth';
import Usefirebase from '../share/hook/Usefirebase';



export const AuthContext = createContext();

const AuthProvider = (props) => {
    const { children } = props;
    const allcontext = Usefirebase();
    return (
        <AuthContext.Provider value={allcontext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;