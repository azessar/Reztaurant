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