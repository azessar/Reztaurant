import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        let newDate = new Date()
        let date = newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear(); 
        this.state = {
            resDate: year + '-' + month + '-' + date,
            resTime: '',
            partySize: '',

        }

    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    // let monthArray = {
    //     1: 1
    // }

    render() {
        const restaurant = this.props.restaurant;
        let formDate = this.props.location.state ? this.props.location.state.resDate : this.state.resDate;
        // console.log(typeof formDate.slice(0,4))
        let formTime = this.props.location.state ? this.props.location.state.resTime : "7:00 PM"
        let formParty = this.props.location.state ? this.props.location.state.partySize : 2;
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
                                <div className="res-form-date">{formDate}</div>
                                <div className="res-form-time">{formTime}</div>
                                <div className="res-form-peeps">{formParty}</div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
            
}

export default ReservationForm;