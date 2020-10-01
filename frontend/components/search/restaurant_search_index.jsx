import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantSearchIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    priceConversion(price) {
        if (price < 15) {
            return '$'
        } else if (price < 40) {
            return '$$'
        } else if (price < 80) {
            return '$$$'
        } else {
            return '$$$$'
        }
    }

    render() {
        const restaurantArray = this.props.restaurants;
        return (
            <div>
                <div className="restaurant-cards">
                    <div className="category-header">
                        Available now
                    </div>
                    <div className="card-row">
                        {restaurantArray.map(restaurant => (
                            <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
                                <div className="restaurant-card">
                                    <img className="card-image" src={restaurant.main_photo} />
                                    <div className="card-info">
                                        <div className="card-name">{restaurant.name}</div>
                                        <div className="card-reviews-and-stars">
                                            <div className="stars">
                                                <img className="star" src={window.star} />
                                                <img className="star" src={window.star} />
                                                <img className="star" src={window.star} />
                                                <img className="star" src={window.star} />
                                            </div>
                                            <div className="reviews">6651 reviews</div>
                                        </div>
                                        <div className="cuisine-price-area">{restaurant.cuisine} - {this.priceConversion(restaurant.avg_price)} - {restaurant.city}, {restaurant.state}</div>
                                        <div className="booked-times">Booked 115 times today</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        )
    }

}

export default RestaurantSearchIndex;
