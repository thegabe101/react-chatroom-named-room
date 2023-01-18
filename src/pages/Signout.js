function SignOut(props) {
    return (
        <div>
            <h3>Yay....You are logged in</h3>
            <button onClick={props.handleClick}>Signout</button>
        </div>
    );
}

export default SignOut;