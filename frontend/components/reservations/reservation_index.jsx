import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        let currentUser = this.props.currentUser;
        let allReservations = this.props.reservations;
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
                            {}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ReservationForm;