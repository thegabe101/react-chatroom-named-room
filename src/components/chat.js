import React from 'react';
import { useState, useEffect } from 'react';
import { addDoc, collection, serverTimestamp, onSnapshot, where, query, orderBy } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../styles/chat.css';
import { Logout } from './logout';

export const Chat = (props) => {
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);
    // const [user, loading, error] = useAuthState(auth);
    const { room } = props;
    const messageRef = collection(db, 'messages');

    useEffect(() => {
        //only want to get messages where the room is equal to the room were passing in props
        const queryMessages = query(messageRef, where("room", '==', room), orderBy('sentAt'));
        //onsnapshot is a listener from firebase, but we need to specify what query we're listening for 
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            console.log('new message');
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            });
            console.log(messages)
            setMessages(messages);
        });
        //call snapshot as a component updated use effect so that it isnt constantly seeking- avoid memory leaks 
        return () => unsubscribe();
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
            <div className='header'>
                <h1>Welcome to {room.toUpperCase()}</h1>
                <div className="messages">
                    {messages.map((message) => (
                        <div key={message.id} className="message">
                            <span className="user">{message.user}:</span> {message.text}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className='newMessageForm'>
                    <input className='newMessage' placeholder='Enter message here...' onChange={(e) => { setNewMessage(e.target.value) }} value={newMessage} />
                    <button type="submit" className='sendBtn'>Send</button>
                </form>
            </div>
        </div>
    )
}
