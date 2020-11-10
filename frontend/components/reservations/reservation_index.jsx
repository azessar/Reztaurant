import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class ReservationIndex extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.requestAllReservations();
        this.props.fetchRestaurants();
    }

    // findRestaurantData() {
    //     let reservedRestaurants = []
    //     let restaurants = this.props.restaurants;
    //     let reservations = this.props.reservation;
    //     reservations.forEach( reservation => {
    //         restaurants.forEach( restaurant => {
    //             if (reservation.restaurant_id === restaurant.id) {
    //                 reservedRestaurants.push(restaurant)
    //             }
    //         })
    //     })
    //     return reservedRestaurants;
    // }

    render() {
        let currentUser = this.props.currentUser;
        let reservations = this.props.reservations;
        let restaurants = this.props.restaurants;
        if (!restaurants || restaurants.length === 0) {
            return null;
        }
        if (!reservations || reservations.length === 0) {
            return null;
        }
        let reservedRestaurants = []
        reservations.forEach(reservation => {
            restaurants.forEach(restaurant => {
                if (reservation.restaurant_id === restaurant.id && reservation.user_id === currentUser.id) {
                    reservedRestaurants.push(restaurant)
                }
            })
        })        
        console.log("hey",reservedRestaurants, reservations)
        return (
            <div className="res-index">
                <h1 className="res-index-name">{currentUser.first_name} {currentUser.last_name}</h1>
                <div className="res-index-body">
                    <div className="res-index-options">
                        <div>Reservations</div>
                        <div className="account-details">Account Details</div>
                    </div>
                    <div className="res-index-list">
                        <h1 className="upcoming-reservations">Upcoming Reservations</h1>
                        <div className="res-index-section">
                            {
                                reservedRestaurants.map((reservedRestaurant,i) => (
                                    <Link to={`/restaurants/${reservedRestaurant.id}`}>
                                        <div className="res-index-card">
                                            <img className="res-index-pic" src={reservedRestaurant.main_photo} />
                                            <div className="res-card-info">
                                                <div>{reservedRestaurant.name}</div>
                                                <div>{reservations[i].date}</div>
                                                <div>Table for {reservations[i].party_size}</div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <footer className="res-index-footer">
                    <div className="footer-text">
                        <div className="mock-opentable-res">
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

export default ReservationIndex;