import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resDate: '',
            resTime: '',
            partySize: '',

        }

    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }



    render() {
        const restaurant = this.props.restaurant;
        if (!restaurant) {
            return null;
        };
        return (
            <div>hello {restaurant.name}</div>
        )
    }
            
}

export default ReservationForm;