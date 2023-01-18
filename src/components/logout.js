import Cookies from 'universal-cookie';
import { useState } from 'react';
import SignOut from '../pages/Signout';
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

function Logout() {
    // const navigate = useNavigate();

    const [loggedIn, setLoggedIn] = useState(cookies.get("auth-token"));
    const handleClick = e => {
        setLoggedIn(cookies.remove('auth-token'));
        // navigate('/');
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
