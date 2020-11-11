import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class ReservationIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resDate: '',
            resTime: '7:00 PM',
            partySize: 2,
            resMade: false,
            resCanceled: false,
        }
        
        this.convertToDayValue = this.convertToDayValue.bind(this);
        this.todayValue = this.todayValue.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        this.props.requestAllReservations();
        this.props.fetchRestaurants();
    }

    convertToDayValue(dateString) {
        let dateArray = dateString.split(" ");
        let monthTable = { "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6, "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12,}
        let yearVal = (parseInt(dateArray[2] - 2016)) * 365;
        let monthVal = (monthTable[dateArray[0]] - 1) * 31;
        let dayVal = parseInt(dateArray[1]);
        return (yearVal + monthVal + dayVal);
    }
    todayValue(){
        let today = new Date()
        return ( today.getDate() + ( (today.getMonth()) * 31 ) + ( (today.getFullYear() - 2016) * 365 ) )
    }

    handleCancel(e) {
        e.preventDefault();
        const { deleteReservation } = this.props;
        // console.log(this.props.reservations)
        // console.log("reservation id:", e.target.id)
        const reservation = this.props.reservations[e.target.id];
        // console.log(reservation)
        // console.log("hey")
        // console.log(reservation.id)
        // console.log("overall id", reservation.id)
        deleteReservation(reservation.id);
        window.location.reload();
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
        let upcomingRestaurants = []
        let upcomingReservations = []
        let previousRestaurants = []
        let previousReservations = []
        reservations.forEach(reservation => {
            restaurants.forEach(restaurant => {
                if (reservation.restaurant_id === restaurant.id && reservation.user_id === currentUser.id && this.convertToDayValue(reservation.date) >= this.todayValue()) {
                    upcomingRestaurants.push(restaurant)
                    upcomingReservations.push(reservation)
                }
                if (reservation.restaurant_id === restaurant.id && reservation.user_id === currentUser.id && this.convertToDayValue(reservation.date) < this.todayValue()) {
                    previousRestaurants.push(restaurant)
                    previousReservations.push(reservation)

                }
            })
        })

        return (
            <div className="res-index">
                <h1 className="res-index-name">{currentUser.first_name} {currentUser.last_name}</h1>
                <div className="res-index-body">
                    <div className="res-index-options">
                        <div>Reservations</div>
                        <div className="account-details">Account Details</div>
                    </div>
                    <div className="res-index-lists">
                        <div className="res-index-list">
                            <h1 className="upcoming-reservations">Upcoming Reservations</h1>
                            <div className="res-index-section">
                                {
                                    upcomingRestaurants.map((reservedRestaurant, i) => (
                                        <Link to={`/restaurants/${reservedRestaurant.id}`} >
                                            <div className="res-index-card">
                                                <img className="res-index-pic" src={reservedRestaurant.main_photo} />
                                                <div className="res-card-info">
                                                    <div>{reservedRestaurant.name}</div>
                                                    <div>{upcomingReservations[i].date}</div>
                                                    <div>{upcomingReservations[i].time}</div>
                                                    <div className="table-for">Table for {upcomingReservations[i].party_size}</div>
                                                    <div className="view-cancel">
                                                        <div className="cancel" id={reservations.indexOf(upcomingReservations[i])} onClick={this.handleCancel}>Cancel reservation</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="res-index-list">
                            <h1 className="upcoming-reservations">Previous Reservations</h1>
                            <div className="res-index-section">
                                {
                                    previousRestaurants.map((reservedRestaurant, i) => (
                                        <Link to={`/restaurants/${reservedRestaurant.id}`}>
                                            <div className="res-index-card">
                                                <img className="res-index-pic" src={reservedRestaurant.main_photo} />
                                                <div className="res-card-info">
                                                    <div>{reservedRestaurant.name}</div>
                                                    <div>{previousReservations[i].date}</div>
                                                    <div>{previousReservations[i].time}</div>
                                                    <div>Table for {previousReservations[i].party_size}</div>
                                                   
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
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