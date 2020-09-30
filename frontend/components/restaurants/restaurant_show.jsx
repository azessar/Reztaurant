import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.fetchRestaurant(this.props.match.params.restaurantId))
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    priceConversion(price) {
        if (price < 15) {
            return '$15 and under'
        } else if (price < 40) {
            return '$20 to $40'
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
        if (!restaurant.photoUrl) {
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
                        <img className="main-show-background" src={restaurant.photoUrl} />
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

                        </div>

                    </div>
                    


                    

                </div>
                
            </div>
        )
    }
}

export default RestaurantShow;