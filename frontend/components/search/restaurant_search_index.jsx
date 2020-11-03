import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantSearchIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchWord: '',
        };
        // this.searchFunction = this.searchFunction.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurants();
        // debugger
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

    // searchFunction() {
    //     var userInput = document.getElementById('search-page-search-bar').value;
    //     // document.getElementById('search-output').innerHTML = `You searched for "${userInput}"`;
    //     let filteredRestaurants = []
    //     const restaurantCards = this.props.restaurants;
    //     restaurantCards.forEach(restaurant => {
    //         if (restaurant.name.toLowerCase().includes(userInput.toLowerCase())) {
    //             filteredRestaurants.push(restaurant)
    //         }
    //     })
    //     console.log(filteredRestaurants)
    //     return filteredRestaurants
    // }

    update(e) {
        e.preventDefault();
        this.setState({
            searchWord: document.getElementById("search-page-search-bar").value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.searchRestaurants(this.state.searchWord)
            .then(() =>
                this.setState({
                    searchWord: ''
                })
            )
            // debugger
    }

    whatDidISearchFor(){
        if (this.state.searchWord) {
            return (
                <div>
                    You searched for "{this.state.searchWord}"
                </div>
            )
        } else if (this.props.location.state) {
             return (
                <div>
                    You searched for "{this.props.location.state.searchWord}"
                </div>
            )
        } else {
            return null
        }
    }


    render() {
        let filteredRestaurantArray = 
            this.state.searchWord && this.props.restaurants ?
                this.props.restaurants.filter(restaurant =>
                    restaurant.name.toLowerCase().includes(this.state.searchWord.toLowerCase()) ||
                    restaurant.city.toLowerCase().includes(this.state.searchWord.toLowerCase()) ||
                    restaurant.cuisine.toLowerCase().includes(this.state.searchWord.toLowerCase())
                )
                :
            this.props.location.state && this.props.restaurants ?
                this.props.restaurants.filter(restaurant =>
                    restaurant.name.toLowerCase().includes(this.props.location.state.searchWord.toLowerCase()) ||
                    restaurant.city.toLowerCase().includes(this.props.location.state.searchWord.toLowerCase()) ||
                    restaurant.cuisine.toLowerCase().includes(this.props.location.state.searchWord.toLowerCase())
                ) 
                :
            this.props.restaurants;
            let sorry;
            if (filteredRestaurantArray.length === 0) {
                sorry = "Sorry, we have no results for that"
            } else {
                sorry = ""
            }     
        return (
            <div>
                <form className="search-page-search-form" >
                    <input className="search-page-search-bar" id="search-page-search-bar" placeholder="Search a restaurant name"
                        defaultValue={this.state.searchWord}
                        // onChange={this.update('searchWord')}
                        >    
                    </input>
                    <button className="find-a-table-button" onClick={this.update}>Find a table</button>
                </form>
                <div id="search-output">
                    {this.whatDidISearchFor()}
                    <br></br>
                    {sorry}
                </div>
                <div className="restaurant-search-cards" id="restaurant-search-cards">
                    {filteredRestaurantArray.map(restaurant => (
                        <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id} className="restaurant-search-card-link">
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