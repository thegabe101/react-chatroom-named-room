import google from '../assets/images/google.jpg';
import { auth, provider } from '../config/firebase.js';
import { signInWithPopup } from 'firebase/auth';
import '../styles/auth.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Auth = (props) => {

    const { setIsAuth } = props;

    const signInWithGoogle = async () => {
        try {
            //const result will grab some of our users information for use in other data structures, user credentials like uid, photourl, displayname, etc
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            //we can create a "cookie" and use our result token user refresh token as a cookie
            //this will plugin to browser cookies, and the refresh token will be used to reauthenticate the user without signing in again 
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div >
            <p>Sign in with Google</p>
            <button className="auth" onClick={() => { signInWithGoogle() }}><img className='google' src={google}></img></button>
        </div>
    )
}