import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props);

        this.avgRating = this.avgRating.bind(this);
        this.totalReviews = this.totalReviews.bind(this);
        this.totalReservations = this.totalReservations.bind(this);

    }

    componentDidMount() {
        this.props.fetchRestaurants();
        this.props.fetchReviews();
        this.props.requestAllReservations();

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

    avgRating(restaurantId) {
        const restaurantReviews = this.props.reviews.filter(review =>
            review.restaurant_id === restaurantId
        )
        let totalScore = 0
        restaurantReviews.forEach(review => totalScore += review.rating)
        return (totalScore / restaurantReviews.length) ? totalScore / restaurantReviews.length : 1
    }

    totalReviews(restaurantId){
        return this.props.reviews.filter(review =>
            review.restaurant_id === restaurantId
        )
    }
    totalReservations(restaurantId) {
        return this.props.reservations.filter(reservation =>
            reservation.restaurant_id === restaurantId
        )
    }

    render() {
        const restaurantArray = this.props.restaurants;
        const restaurantEvens = [];
        const restaurantOdds = [];
        restaurantArray.forEach(res => 
            parseInt(res.id) % 2 === 0 ? restaurantEvens.push(res) : restaurantOdds.push(res)
        )
        return (
            <div className="restaurant-cards-holder">
                <div className="restaurant-cards">
                    <div className="category-header">
                        Available now
                    </div>
                    <div className="card-row" id="card-row-1">
                        {restaurantEvens.map(restaurant => (
                            <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
                                <div className="restaurant-card">
                                    <img className="card-image" src={restaurant.main_photo} />
                                    <div className="card-info">
                                        <div className="card-name">{restaurant.name}</div>
                                        <div className="card-reviews-and-stars">
                                            <div className="stars">
                                                {[...Array(parseInt(this.avgRating(restaurant.id).toFixed(0)))].map((e, i) => <i className='fas fa-star' key={i}></i>)}
                                                {[...Array(parseInt(5 - this.avgRating(restaurant.id).toFixed(0)))].map((e, i) => <i className='fas fa-star' id="clear-star" key={i}></i>)}
                                            </div>
                                            {
                                                this.totalReviews(restaurant.id).length === 1 ?
                                                    <div className="reviews">{this.totalReviews(restaurant.id).length} Review</div>
                                                    :
                                                    <div className="reviews">{this.totalReviews(restaurant.id).length} Reviews</div>
                                            }
                                           
                                        </div>
                                        <div className="cuisine-price-area">{restaurant.cuisine} - {this.priceConversion(restaurant.avg_price)} - {restaurant.city}, {restaurant.state}</div>
                                        {
                                            this.totalReservations(restaurant.id).length === 1
                                            ?
                                            <div className="booked-times">Booked {this.totalReservations(restaurant.id).length} time</div>
                                            :
                                            <div className="booked-times">Booked {this.totalReservations(restaurant.id).length} times</div>
                                        }
                                    </div>
                                </div>
                            </Link>
                        ))}
                        <div className="scroll-holder-1">
                            <div className="scroll-back" id="2" onClick={() => document.getElementById("card-row-1").scrollBy(-255, 0)}> {"<"} </div>
                            <div className="scroll-button" id="1" onClick={() => document.getElementById("card-row-1").scrollBy(255, 0)}> > </div>
                        </div>
                    </div>

                    <div className="category-header">
                        Get it delivered
                    </div>
                    <div className="card-row" id="card-row-2">
                        {restaurantOdds.map(restaurant => (
                            <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
                                <div className="restaurant-card">
                                    <img className="card-image" src={restaurant.main_photo} />
                                    <div className="card-info">
                                        <div className="card-name">{restaurant.name}</div>
                                        <div className="card-reviews-and-stars">
                                            <div className="stars">
                                                {[...Array(parseInt(this.avgRating(restaurant.id).toFixed(0)))].map((e, i) => <i className='fas fa-star' key={i}></i>)}
                                                {[...Array(parseInt(5 - this.avgRating(restaurant.id).toFixed(0)))].map((e, i) => <i className='fas fa-star' id="clear-star" key={i}></i>)}
                                            </div>
                                            {
                                                this.totalReviews(restaurant.id).length === 1 ?
                                                    <div className="reviews">{this.totalReviews(restaurant.id).length} Review</div>
                                                    :
                                                    <div className="reviews">{this.totalReviews(restaurant.id).length} Reviews</div>
                                            }
                                        </div>
                                        <div className="cuisine-price-area">{restaurant.cuisine} - {this.priceConversion(restaurant.avg_price)} - {restaurant.city}, {restaurant.state}</div>
                                        {
                                            this.totalReservations(restaurant.id).length === 1
                                                ?
                                                <div className="booked-times">Booked {this.totalReservations(restaurant.id).length} time</div>
                                                :
                                                <div className="booked-times">Booked {this.totalReservations(restaurant.id).length} times</div>
                                        }                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="scroll-holder-2">
                        <div className="scroll-back" id="1" onClick={() => document.getElementById("card-row-2").scrollBy(-255, 0)}> {"<"} </div>
                        <div className="scroll-button" id="2" onClick={() => document.getElementById("card-row-2").scrollBy(255, 0)}> > </div>
                    </div>
                        
                </div>
            </div>
            
        )
    }

}

export default RestaurantIndex;
