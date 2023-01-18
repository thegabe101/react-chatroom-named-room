import React from 'react';
import { createContext, useContext, useState } from 'react';
import { useRef } from 'react';
import { Chat } from './chat';

// const RoomContext = createContext(null);


export const RoomPlugin = () => {
    const [room, setRoom] = useState(null);

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
