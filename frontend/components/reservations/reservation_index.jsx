import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class ReservationIndex extends React.Component {
    constructor(props) {
        super(props);
        
        this.findRestaurantData = this.findRestaurantData.bind(this);
    }

    componentDidMount() {
        this.props.requestAllReservations();
        this.props.fetchRestaurants();
    }

    findRestaurantData() {
        let reservedRestaurants = []
        let restaurants = this.props.restaurants;
        let reservations = this.props.reservation;
        reservations.forEach( reservation => {
            restaurants.forEach( restaurant => {
                if (reservation.restaurant_id === restaurant.id) {
                    reservedRestaurants.push(restaurant)
                }
            })
        })
        return reservedRestaurants;
    }

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
                if (reservation.restaurant_id === restaurant.id) {
                    reservedRestaurants.push(restaurant)
                }
            })
        })        
        console.log("hey",reservedRestaurants)
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
                        <div>
                            {/* {allReservations.map(reservation => (
                                <div>
                                    <div>{reservation.id}</div>
                                    <div>{reservation.user_id}</div>
                                    <div>{reservation.restaurant_id}</div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ReservationIndex;