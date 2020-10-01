import React from "react";
import GreetingHeader from "./greeting/greeting_container";
import SignupModal from "./greeting/signup_modal_container";
import SigninModal from "./greeting/signin_modal_container";
import Modal from './modal/modal';
import RestaurantIndexItem from './restaurants/restaurant_index_container'
import RestaurantShow from './restaurants/restaurant_show_container'
import SplashBody from './greeting/splash_body'
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
// import RestaurantSearchIndex from './search/restaurant_search_index';


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
        <GreetingHeader />
       
        <Switch>
            <Route path="/restaurants/:restaurantId" component={RestaurantShow} />
            {/* <Route path="/restaurants" component={RestaurantSearchIndex} /> */}
            <Route path="/" component={SplashBody} />
        </Switch>
    </div>
);

export default App;