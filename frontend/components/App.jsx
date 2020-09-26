import React from "react";
import GreetingHeader from "./greeting/greeting_container";
import SignupModal from "./greeting/signup_modal_container";
import SigninModal from "./greeting/signin_modal_container";
import Modal from './modal/modal';
import MainSearch from './main_search/main_search'


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
                    <MainSearch />
                </div>
            </div>
        </header>
        <section>
            <div className="it-looks-like">
                <div>It looks like you're in Chicago. Not correct?</div>
                <img className="arrow-location" src={window.arrow_location} />
                <div>Get current location</div>
            </div>
            <span className="thin-gray-underline"></span>
        </section>
    </div>
);

export default App;