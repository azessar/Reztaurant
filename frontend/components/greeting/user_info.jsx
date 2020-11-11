import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class UserInfoPage extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        let currentUser = this.props.currentUser;
        return (
            <div className="res-index">
                <h1 className="res-index-name">{currentUser.first_name} {currentUser.last_name}</h1>
                <div className="res-index-body">
                    <div className="res-index-options">
                        <Link to="/reservations"><div className="account-details">Reservations</div></Link>
                        <div className="reservation-switch">Account Details</div>
                    </div>
                    <div className="res-index-lists">
                        <div className="res-index-list">
                            <h1 className="upcoming-reservations">Upcoming Reservations</h1>
                            <div className="res-index-section">
                             
                            </div>
                        </div>
                        <div className="res-index-list">
                            <h1 className="upcoming-reservations">Previous Reservations</h1>
                            <div className="res-index-section">
                                
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

export default UserInfoPage;