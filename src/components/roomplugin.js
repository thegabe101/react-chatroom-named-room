import React from 'react';
import { createContext, useContext, useState } from 'react';
import { useRef } from 'react';
import { Chat } from './chat';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';


// const RoomContext = createContext(null);


export const RoomPlugin = () => {
    const [room, setRoom] = useState(null);
    // const navigate = useNavigate();

    // const signUserOut = async () => {
    //     await signOut(auth);
    //     navigate('/');
    // }
    //need to use a reference hook here so that the onchange does not constantly hide room as user is entering room name 
    const roomRef = useRef(null);


    return (
        // <RoomContext.Provider>
        <div>
            {room ? <div><Chat room={room} /></div>
                :
                <div className='room'>
                    <label>Enter Room Name: </label>
                    <input ref={roomRef} />
                    <button onClick={() => setRoom(roomRef.current.value)}>Enter Chat</button>
                </div>}
        </div>
        // </RoomContext.Provider>
    )
}
