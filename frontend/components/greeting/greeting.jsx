import React from 'react';
import { Link } from 'react-router-dom';

const GreetingHeader = ( {currentUser, logout} ) => {

    const userButtons = () => {
        return (
            <div>
                USER BUTTONS
            </div>
        )
    };

    const sessionButtons = () => {
        return (
            <div>
                SESSION BUTTONS
            </div>
        )
    };

    return currentUser ? userButtons() : sessionButtons();
}

export default GreetingHeader;