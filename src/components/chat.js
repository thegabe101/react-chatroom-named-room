import React from 'react';
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

export const Chat = (props) => {
    const [newMessage, setNewMessage] = useState("")
    const { room } = props;
    const messageRef = collection(db, 'messages');

    const handleSubmit = async (e) => {
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
            </form></div>
    )
}
