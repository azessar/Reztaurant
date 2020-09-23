import React from 'react';
import { Link } from 'react-router-dom';

const GreetingHeader = ( { currentUser, signout, signin, signup } ) => {

    const userButtons = () => {
        return (
            <nav>
                Hello (user)!
                <button className="signout-button" onClick={signout}>Sign out</button>
            </nav>
        )
    };

    const sessionButtons = () => {
        return (
            <nav>
                <button className="signup-button" onClick={signup}>Sign up</button>
                <button className="signin-button" onClick={signin}>Sign in</button>
            </nav>
        )
    };

    return currentUser ? userButtons() : sessionButtons();
}

export default GreetingHeader;