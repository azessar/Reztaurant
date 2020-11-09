import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        let newDate = new Date()
        let stateDate = newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear(); 
        this.state = {
            resDate: year + '-' + month + '-' + stateDate,
            resTime: '7:00 PM',
            partySize: 2,
            

        }
        this.dateConvert = this.dateConvert.bind(this);
        this.userForm = this.userForm.bind(this);
        this.guestForm = this.guestForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { createReservation } = this.props;
        const user_id = this.props.currentUser.id;
        const restaurant_id = this.props.restaurant.id;
        const date = this.props.location.state ? this.dateConvert(this.props.location.state.resDate) : this.dateConvert(this.state.resDate);
        const time = this.props.location.state ? this.props.location.state.resTime : "7:00 PM"
        const party_size = this.props.location.state ? this.props.location.state.partySize : 2;
        console.log(user_id, restaurant_id, date, time, party_size)
        createReservation({ user_id, restaurant_id, date, time, party_size });
        // this.setState({
        //     first_name: '',
        //     last_name: '',
        //     email: '',
        //     password: '',
        //     primary_dining_location: ''
        // });
    }

    dateConvert(dateString) {
        const monthArray = { "01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December"}
        return monthArray[dateString.slice(5, 7)] + " " + dateString.slice(8) + ", " + dateString.slice(0,4)
    }

    userForm() {
        const user = this.props.currentUser;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Diner Details</h1>
                <div className="res-name-email">
                    <div className="res-user-name">{user.first_name} {user.last_name}</div>
                    <div>{user.email}</div>
                </div>
                <button className="complete-res">Complete reservation</button>
            </form>
        )

    }
    guestForm() {
        return (
            <div>
                Please sign in or sign up to make a reservation.
            </div>
        )
    }

    render() {
        const restaurant = this.props.restaurant;
        let formDate = this.props.location.state ? this.dateConvert(this.props.location.state.resDate) : this.dateConvert(this.state.resDate);
        // console.log(typeof formDate.slice(0,4))
        let formTime = this.props.location.state ? this.props.location.state.resTime : this.state.resTime;
        let formParty = this.props.location.state ? this.props.location.state.partySize : this.state.partySize;
        console.log("state:",this.state)
        if (!restaurant) {
            return null;
        };
        return (
            <div>
                <div className="restaurant-header-loc">
                    <Link to="/"><div className="show-home">Home</div></Link>
                    <div>United States</div>
                    <div>{restaurant.city} / {restaurant.state}</div>
                </div>
                <div className="res-form-body">
                    <div className="almost-done">
                        You're almost done!
                    </div>
                    <div className="res-card">
                        <img className="res-pic" src={restaurant.main_photo} />
                        <div className="res-info">
                            <div className="res-name-city">
                                {restaurant.name} - {restaurant.city}
                            </div>
                            <div className="res-date-time-peeps">
                                <div className="res-party-info">
                                    <i className='fas fa-calendar'></i>
                                    <div className="res-form-date">{formDate}</div>
                                </div>
                                <div className="res-party-info">
                                    <i className='fas fa-clock'></i>
                                    <div className="res-form-time">{formTime}</div>
                                </div>
                                <div className="res-party-info">
                                    <i className='fas fa-male'></i>
                                    <div className="res-form-peeps">Party of {formParty}</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {this.props.currentUser ? this.userForm() : this.guestForm()}                
                    
                </div>
                <footer className="res-footer">
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

export default ReservationForm;