import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    priceConversion(price) {
        if (price < 15) {
            return '$15 and under'
        } else if (price < 30) {
            return '$15 to $30'
        } else if (price < 80) {
            return '$40 to $80'
        } else {
            return 'over $80'
        }
    }

    timeConversion(time) {
        let nextTime = new Date(time);
        let hours = nextTime.getUTCHours();
        let minutes = nextTime.getUTCMinutes();
        if (hours > 12) {
            const newHours = hours - 12;
            return `${newHours}:00 PM`
        } else if (hours === 12) {
            return `${hours}:00 PM`
        } else {
            return `${hours}:00 AM`
        }
    }

    render(){
        const restaurant = this.props.restaurant;
        if (!restaurant) {
            return null;
        };
        if (!restaurant.main_photo) {
            return null;
        };

        if (!restaurant.background_photo) {
            return null;
        };
        
        return(
            <div>
                <div className="restaurant-header-loc">
                    <Link to="/"><div className="show-home">Home</div></Link>
                    <div>United States</div>
                    <div>{restaurant.city} / {restaurant.state}</div>
                </div>
                <div className="show-body">
                    <div className="show-pic-goes-here">
                        {/* <img className="default_show_background" src={window.default_show_background} /> */}
                        <img className="main-background-show-image" src={restaurant.background_photo} />
                        <div className="save-this-restaurant">Save this restaurant</div>
                    </div>
                    <div className="overview-tabs">
                        <div className="inner-overview-tab">
                            <div className="overview-tab-div">Overview</div>
                            <div className="overview-tab-div">Photos</div>
                            <div className="overview-tab-div">Popular dishes</div>
                            <div className="overview-tab-div">Menu</div>
                            <div className="overview-tab-div">Reviews</div>
                            <div className="overview-tab-div">Twitter</div>
                        </div>   
                    </div>
                  
                    <div className="show-body-columns">
                        <div className="show-main-body">
                            <div className="big-restaurant-name">{restaurant.name} - {restaurant.city}</div>
                            <div className="rating-review-price-cuisine">
                                <div className="stars-score">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <div className="restaurant-score">4.0</div>
                                </div>
                                <div className="show-reviews">
                                    <img className="review_blurb" src={window.review_blurb} />
                                    <div className="review-num">4469 Reviews</div>
                                </div>
                                <div className="money-stuff">
                                    <img className="dollars" src={window.dollars} />
                                    <div className="show-pricing">{this.priceConversion(restaurant.avg_price)}</div>
                                </div>
                                <div className="show-cuisine">
                                    <img className="fork_knife" src={window.fork_knife} />
                                    <div className="the-cuisine">{restaurant.cuisine}</div>
                                </div>
    
                            </div>
                            <div className="show-description">
                                <div className="description-text">{restaurant.description}</div>
                            </div>
                            <div className="show-photos">
                                <div className="photos-header">Photos</div>
                                <div className="show-lower-photos">
                                    <img className="show-lower-photo" src={restaurant.main_photo} />
                                </div>

                            </div>
                           
                        </div>
                        
                        
                        
                    </div>
                    

                    
                    <div className="show-res-form">
                        <div className="make-a-res">Make a reservation</div>
                        <div className="party-size">Party size</div>
                        <form className="right-show-res-form">
                            <select className="for-two" defaultValue="For 2">
                                <option value="2">For 2</option>
                            </select>
                            <div className="date-time-head-show">
                                <div>Date</div>
                                <div>Time</div>
                            </div>
                            <div className="date-time-select-show">
                                <input type="date" className="date-select-show" defaultValue="2020-10-02"></input>
                                <select className="time-select-show" defaultValue="7:00 PM">
                                    <option value="19:00">7:00 PM</option>
                                    <option value="8:00">8:00 AM</option>
                                    <option value="8:30">8:30 AM</option>
                                    <option value="9:00">9:00 AM</option>
                                    <option value="9:30">9:30 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="10:30">10:30 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="11:30">11:30 AM</option>
                                    <option value="12:00">12:00 PM</option>
                                    <option value="12:30">12:30 PM</option>
                                    <option value="13:00">1:00 PM</option>
                                    <option value="13:30">1:30 PM</option>
                                    <option value="14:00">2:00 PM</option>
                                    <option value="14:30">2:30 PM</option>
                                    <option value="15:00">3:00 PM</option>
                                    <option value="15:30">3:30 PM</option>
                                    <option value="16:00">4:00 PM</option>
                                    <option value="16:30">4:30 PM</option>
                                    <option value="17:00">5:00 PM</option>
                                    <option value="17:30">5:30 PM</option>
                                    <option value="18:00">6:00 PM</option>
                                    <option value="18:30">6:30 PM</option>
                                    <option value="19:00">7:00 PM</option>
                                    <option value="19:30">7:30 PM</option>
                                    <option value="20:00">8:00 PM</option>
                                    <option value="20:30">8:30 PM</option>
                                    <option value="21:00">9:00 PM</option>
                                    <option value="21:30">9:30 PM</option>
                                    <option value="22:00">10:00 PM</option>
                                    <option value="22:30">10:30 PM</option>
                                    <option value="23:00">11:00 PM</option>
                                    <option value="23:30">11:30 PM</option>
                                </select>
                            </div>
                            <button className="show-res-button">Show next available</button>
                        </form>
                    </div>
                    <div className="more-show-info">
                        <div className="hours-show-info">
                            <div className="info-header">
                                <i class='fas fa-clock'></i>
                                <div>Hours of operation:</div>
                            </div>
                            <div className="open-days-show">
                                Sun-Sat: {this.timeConversion(restaurant.open_time)} - {this.timeConversion(restaurant.close_time)}
                            </div>
                        </div>
                        <div className="address-show-info">
                            <div className="info-header">
                                <i class='fas fa-map-marker'></i>
                                <div className="address-header">Address:</div>
                            </div>
                            <div className="open-days-show">
                                {restaurant.address}, {restaurant.state} {restaurant.zip}
                            </div>
                        </div>
        
                        
                    </div>
                </div>
                <footer className="show-footer">
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

export default RestaurantShow;