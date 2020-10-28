import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantSearchIndex extends React.Component {
    constructor(props) {
        super(props);

        this.filterRestaurantsByName = this.filterRestaurantsByName.bind(this);
        this.searchFunction = this.searchFunction.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    priceConversion(price) {
        if (price < 15) {
            return '$'
        } else if (price < 40) {
            return '$$'
        } else if (price < 80) {
            return '$$$'
        } else {
            return '$$$$'
        }
    }

    searchFunction(){
        var userInput = document.getElementById('search-page-search-bar').value;
        document.getElementById('search-output').innerHTML = `You searched for "${userInput}"`;
        this.filterRestaurantsByName(userInput);
    }

    filterRestaurantsByName(string){
        const restaurantArray = this.props.restaurants;
        let filteredRestaurants = [];
        restaurantArray.forEach(restaurant => {
            if (restaurant.name.toLowerCase().includes(string.toLowerCase())) {
                filteredRestaurants.push(restaurant)
            }
        })
        return filteredRestaurants;
    }

    render() {
        const filteredRestaurantArray = this.props.restaurants;
        return (
            <div>
                <form className="search-page-search-form" onSubmit={this.searchFunction}>
                    <input className="search-page-search-bar" id="search-page-search-bar" placeholder="Search a restaurant name"></input>
                    <button className="find-a-table-button">Find a table</button>
                </form>
                <div id="search-output"></div>
                <div className="restaurant-search-cards">
                    {filteredRestaurantArray.map(restaurant => (
                        <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
                            <div className="restaurant-search-card">
                                <img className="search-pic" src={restaurant.main_photo} />
                                <div className="search-info">
                                    <div className="card-name">{restaurant.name}</div>
                                    <div className="card-reviews-and-stars">
                                        <div className="stars">
                                            <img className="star" src={window.star} />
                                            <img className="star" src={window.star} />
                                            <img className="star" src={window.star} />
                                            <img className="star" src={window.star} />
                                        </div>
                                        <div className="reviews">6651 reviews</div>
                                    </div>
                                    <div className="cuisine-price-area">{restaurant.cuisine} - {this.priceConversion(restaurant.avg_price)} - {restaurant.city}, {restaurant.state}</div>
                                    <div className="booked-times">Booked 115 times today</div>
                                </div>
                            </div>
                        </Link> 
                    ))}
                    
                   
                </div>
            </div>

        )
    }

}

export default RestaurantSearchIndex;

// {
//     restaurantArray.map(restaurant => (
//         <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
//             <div className="restaurant-search-card">
//                 <img className="card-image" src={restaurant.main_photo} />
                // <div className="card-info">
                //     <div className="card-name">{restaurant.name}</div>
                //     <div className="card-reviews-and-stars">
                //         <div className="stars">
                //             <img className="star" src={window.star} />
                //             <img className="star" src={window.star} />
                //             <img className="star" src={window.star} />
                //             <img className="star" src={window.star} />
                //         </div>
                //         <div className="reviews">6651 reviews</div>
                //     </div>
                //     <div className="cuisine-price-area">{restaurant.cuisine} - {this.priceConversion(restaurant.avg_price)} - {restaurant.city}, {restaurant.state}</div>
                //     <div className="booked-times">Booked 115 times today</div>
                // </div>
//             </div>
//         </Link>
//     ))
// }