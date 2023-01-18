import { auth } from "../config/firebase";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { app } from "../config/firebase";

function SignOut(props) {
    const user = getAuth(app)

    return (
        <div>
            {/* <h3>Yay....You are logged in as {user.currentUser.displayName}</h3> */}
            {/* <img src={user.currentUser.photoURL} /> */}
            <button onClick={props.handleClick}>Signout</button>
        </div>
    );
}

export default SignOut;