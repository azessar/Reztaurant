import React from "react";
import GreetingHeader from "./greeting/greeting_container";
import SignupModal from "./greeting/signup_modal_container";
import SigninModal from "./greeting/signin_modal_container";


const App = () => (
    <div>
        <header className="main-header">
            <GreetingHeader />
            <SignupModal />
            <SigninModal />
            <div className="splash-image-container">
                <span className="find-your-table-text">Find your table for any occasion</span>
                <img className="splash-image" src={window.restaurantURL}/>
                <form className="main-search-form">
                    <input placeholder="Date"></input>
                    <input placeholder="Time"></input>
                    <input placeholder="Num People"></input>
                    <input placeholder="Search"></input>
                </form>
            </div>
        </header>
    </div>
);

export default App;