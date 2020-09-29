import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    render(){
        debugger
        const restaurant = this.props.restaurant;
        return(
            <div>
                aaaabbb
                {restaurant.name}
            </div>
        )
    }
}

export default RestaurantShow;