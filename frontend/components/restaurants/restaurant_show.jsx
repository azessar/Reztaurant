import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    render(){
        const restaurant = this.props.restaurant;
        return(
            <div>
                <div>
                    <div>Home</div>
                    <div>United States</div>
                    <div>{restaurant.city} / {restaurant.state}</div>
                </div>
                {restaurant.name}
            </div>
        )
    }
}

export default RestaurantShow;