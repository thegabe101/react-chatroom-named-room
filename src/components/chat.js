import React from 'react';
import { useState, useEffect } from 'react';
import { addDoc, collection, serverTimestamp, onSnapshot, where, query } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../styles/chat.css';
import { Logout } from './logout';

export const Chat = (props) => {
    const [newMessage, setNewMessage] = useState("");
    // const [user, loading, error] = useAuthState(auth);
    const { room } = props;
    const messageRef = collection(db, 'messages');

    useEffect(() => {
        //only want to get messages where the room is equal to the room were passing in props
        const queryMessages = query(messageRef, where("room", '==', room));
        //onsnapshot is a listener from firebase, but we need to specify what query we're listening for 
        onSnapshot(queryMessages, (snapshot) => {
            console.log('new message');
        })
    }, [])



    const handleSubmit = async (e) => {
        // console.log(user);
        console.log(auth.currentUser)
        e.preventDefault();
        if (newMessage === '') return;

        await addDoc(messageRef, {
            text: newMessage,
            sentAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });

        //return message state to blank
        setNewMessage('');
    }

    return (
        <div className='chatCenter'>
            <form onSubmit={handleSubmit} className='newMessageForm'>
                <input className='newMessage' placeholder='Enter message here...' onChange={(e) => { setNewMessage(e.target.value) }} value={newMessage} />
                <button type="submit" className='sendBtn'>Send</button>
            </form>
        </div>
    )
}
