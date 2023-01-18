import React from 'react'
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
    const navigate = useNavigate();

    const signUserOut = async () => {
        await signOut(auth);
        navigate('/');
    }

    return (
        <div><button onClick={signUserOut}>Sign Out</button></div>
    )
}
