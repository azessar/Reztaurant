import React from 'react';
import Modal from '../modal/modal';
import MainSearch from '../main_search/main_search';
import RestaurantIndex from '../restaurants/restaurant_index_container'
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class SplashBody extends React.Component {

    render() {
        return(
            <div>
                <header className="main-header">
                    <div className="splash-image-container">
                        <span className="find-your-table-text">Find your table for any occasion</span>
                        <div className="splash-image-div">
                            <img className="splash-image" src={window.restaurantURL} />
                            <MainSearch />
                        </div>
                    </div>
                </header>
                <section>
                    <div className="it-looks-like">
                        <div>It looks like you're in Chicago. Not correct?</div>
                        {/* <img className="arrow-location" src={window.arrow_location} /> */}
                        <div>Get current location</div>
                    </div>
                    <span className="thin-gray-underline"></span>
                </section>
                <RestaurantIndex />
                <section className="bottom-socials">
                    <img className="footer-food" src={window.footer_food} />
                    <div className="socials-text">
                        <div className="connect-with-me">Connect with me!</div>
                        <div className="social-buttons">
                            <form action="https://www.linkedin.com/in/andrew-zessar-93067192/" target="_blank">
                                <input type="submit" value="LinkedIn" className="linkedin" />
                            </form>
                            <form action="https://twitter.com/ZesstySauce">
                                <input type="submit" value="@zesstysauce" className="twitter" target="_blank" />
                            </form>
                            <form action="https://github.com/azessar">
                                <input type="submit" value="Github" className="github" target="_blank" />
                            </form>
                        </div>
                    </div>
                </section>
                <footer className="splash-footer">
                    <div className="footer-text">
                        <div className="mock-opentable">
                            Mock OpenTable by Andrew Zessar, using Ruby, Rails, JS, React/Redux
                    </div>
                        <div className="real-opentable">
                            <a href="https://www.opentable.com/" target="_blank">Click here for the real OpenTable website</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }

}

export default SplashBody;