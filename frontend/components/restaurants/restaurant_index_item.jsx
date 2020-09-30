import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render(){
        console.log("secondtry_", this.props.restaurants)
        const restaurantArray = this.props.restaurants;
        // const { name } = this.props.restaurant;
        return(
            <div>
                {restaurantArray.map ( restaurant => (
                    restaurant.name
                ))}
            </div>
        )
    }

}

export default RestaurantIndexItem;