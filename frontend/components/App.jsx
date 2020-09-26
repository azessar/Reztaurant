import React from "react";
import GreetingHeader from "./greeting/greeting_container";
import SignupModal from "./greeting/signup_modal_container";
import SigninModal from "./greeting/signin_modal_container";
import Modal from './modal/modal';
import MainSearch from './main_search/main_search'; 
import MainRestaurants from './main_restaurants/main_restaurants'; 
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';


const App = () => (
    
    <div>
        <div className="top-line">
            <div className="top-line-social">
                <a href="https://www.linkedin.com/in/andrew-zessar-93067192/" target="_blank">LinkedIn</a>
            </div>
            <div className="top-line-social">
                <a href="https://twitter.com/ZesstySauce" target="_blank">@zesstysauce</a>
            </div>
            <div className="top-line-social">
                <a href="https://github.com/azessar" target="_blank">Github</a>
            </div>
        </div>
        <Modal />
        <Switch>
            <Route path="/" component={GreetingHeader} />
        </Switch>
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
        <MainRestaurants />
        <section className="bottom-socials">
            <img className="footer-food" src={window.footer_food} />
            <div className="socials-text">
                <div className="connect-with-me">Connect with me!</div>
                <div className="social-buttons">
                    <form action="https://www.linkedin.com/in/andrew-zessar-93067192/" target="_blank">
                        <input type="submit" value="LinkedIn" className="linkedin"/>
                    </form>
                    <form action="https://twitter.com/ZesstySauce">
                        <input type="submit" value="@zesstysauce" className="twitter" target="_blank"/>
                    </form>
                    <form action="https://github.com/azessar">
                        <input type="submit" value="Github" className="github" target="_blank"/>
                    </form>
                </div>
            </div>
        </section>
    </div>
);

export default App;