import { LoginScreen } from './pages/Login';
import './App.css';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import { createContext, useContext } from 'react';
import { Room } from './pages/Room';

const RoomContext = createContext(null);

const cookies = new Cookies();

function App(props) {
  //basically, IF there is an auth token, we can represent isauth as true
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  // const [room, setRoom] = useState(null);


  if (!isAuth) return (
    <div>
      <LoginScreen setIsAuth={setIsAuth}/>
    </div>
  )

  return (

    <div className="App">
      <Room />
    </div>

  );
}

export default App;
