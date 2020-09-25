import React from "react";
import GreetingHeader from "./greeting/greeting_container";
import SignupModal from "./greeting/signup_modal_container";
import SigninModal from "./greeting/signin_modal_container";
import Modal from './modal/modal';


const App = () => (
    
    <div>
        <div className="top-line">
            <div className="top-line-social">LinkedIn</div>
            <div className="top-line-social">Twitter</div>
            <div className="top-line-social">Github</div>
        </div>
        <Modal />
        <header className="main-header">
            <GreetingHeader />

            <div className="splash-image-container">
                <span className="find-your-table-text">Find your table for any occasion</span>
                <div className="splash-image-div">
                    <img className="splash-image" src={window.restaurantURL}/>
                    <form className="main-search-form">
                        <input placeholder="Date"></input>
                        <input placeholder="Time"></input>
                        <input placeholder="Num People"></input>
                        <input placeholder="Search"></input>
                    </form>
                </div>
            </div>
        </header>
    </div>
);

export default App;