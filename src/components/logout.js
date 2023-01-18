import Cookies from 'universal-cookie';
import { useState } from 'react';
import SignOut from '../pages/Signout';

const cookies = new Cookies();

function Logout() {
    const [loggedIn, setLoggedIn] = useState(cookies.get("auth-token"));
    const handleClick = e => {
        setLoggedIn(cookies.remove('auth-token'));
    };

    return (
        <div>
            {loggedIn && (
                <SignOut handleClick={handleClick} />
            )}
        </div>
    );
}
export default Logout;
