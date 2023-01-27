import React, {createContext, useEffect, useState,  useContext} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../Firebase'

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvaider({children}) {
	const [currentUser, setCurrentUser] = useState();

	const signUp = (email, password) => {
			return createUserWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
			const onSubscribe = onAuthStateChanged(auth,(user) =>{
					setCurrentUser(user);
			});
			return onSubscribe;
	}, []);

	return (<AuthContext.Provider value={{
		signUp: signUp,
	}}
	>{children}
	</AuthContext.Provider>)
};