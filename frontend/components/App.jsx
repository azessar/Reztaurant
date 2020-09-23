import React from "react";
import GreetingHeader from "./greeting/greeting_container";
import SignupModal from "./greeting/signup_modal_container";
import SigninModal from "./greeting/signin_modal_container";

const App = () => (
    <div>
        <header>
            <h1>OpenTable</h1>
            <GreetingHeader />
            <SignupModal />
            <SigninModal />
        </header>
    </div>
);

export default App;