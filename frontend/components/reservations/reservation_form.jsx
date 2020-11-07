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



    render() {
        const restaurant = this.props.restaurant;
        let formDate = this.props.location.state ? this.props.location.state.resDate : this.state.resDate;
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
                <div>hello {restaurant.name} blah blah {formParty} blah {formTime} blah {formDate} </div>
            </div>
        )
    }
            
}

export default ReservationForm;