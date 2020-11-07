import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantSearchIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchWord: '',
            $: 'off',
            $$: 'off',
            $$$: 'off',
            $$$$: 'off',
            regions: [],
            cuisines: [],
            partySize: '',
            resDate: '2020-10-02',
            resTime: ''
        };
        // this.searchFunction = this.searchFunction.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.togglePrice = this.togglePrice.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);
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

    update(e) {
        e.preventDefault();
        this.setState({
            searchWord: document.getElementById("search-page-search-bar").value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchRestaurants(this.state.searchWord)
            .then(() =>
                this.setState({
                    searchWord: ''
                })
            )
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

    togglePrice(price) {
        if (this.state[price] === "off") {
            return () => {
                this.setState({
                    [price]: 'on'
                });
            }
        } else {
            return () => {
                this.setState({
                    [price]: 'off'
                });
            }
        }
    }

    toggleFilter(filter, field) {
        if (!this.state[field].includes(filter)) {
            var newState = this.state[field].concat(filter)
            this.setState({
                [field]: newState
            })
        } else {
            var newState2 = [];
            this.state[field].forEach(ele => (
                ele === filter ? null : newState2.push(ele)
            ))
            this.setState({
                [field]: newState2
            })
        }
    }


    render() {
        let searchedRestaurantArray = 
            (this.state.$ === "off" && this.state.$$ === "off" && this.state.$$$ === "off" && this.state.$$$$ === "off") 
            ?
            (
                    this.state.searchWord && this.props.restaurants ?
                        this.props.restaurants.filter(restaurant =>
                            (restaurant.name.toLowerCase().includes(this.state.searchWord.toLowerCase()) ||
                                restaurant.city.toLowerCase().includes(this.state.searchWord.toLowerCase()) ||
                                restaurant.cuisine.toLowerCase().includes(this.state.searchWord.toLowerCase()))
                        )
                        :
                        this.props.location.state && this.props.restaurants ?
                            this.props.restaurants.filter(restaurant =>
                                (restaurant.name.toLowerCase().includes(this.props.location.state.searchWord.toLowerCase()) ||
                                    restaurant.city.toLowerCase().includes(this.props.location.state.searchWord.toLowerCase()) ||
                                    restaurant.cuisine.toLowerCase().includes(this.props.location.state.searchWord.toLowerCase()))
                            )
                        :
                        this.props.restaurants
            )
            :
            (
                this.state.searchWord && this.props.restaurants ?
                this.props.restaurants.filter(restaurant =>
                    (restaurant.name.toLowerCase().includes(this.state.searchWord.toLowerCase()) ||
                    restaurant.city.toLowerCase().includes(this.state.searchWord.toLowerCase()) ||
                    restaurant.cuisine.toLowerCase().includes(this.state.searchWord.toLowerCase()))
                    &&
                    this.state[this.priceConversion(restaurant.avg_price)] === "on"
                )
                :
            this.props.location.state && this.props.restaurants ?
                this.props.restaurants.filter(restaurant =>
                    (restaurant.name.toLowerCase().includes(this.props.location.state.searchWord.toLowerCase()) ||
                    restaurant.city.toLowerCase().includes(this.props.location.state.searchWord.toLowerCase()) ||
                    restaurant.cuisine.toLowerCase().includes(this.props.location.state.searchWord.toLowerCase()))
                    &&
                    this.state[this.priceConversion(restaurant.avg_price)] === "on"
                ) 
                :
            this.props.restaurants.filter(restaurant =>
                this.state[this.priceConversion(restaurant.avg_price)] === "on"
            )
        )
        let regionSearchedRestaurantArray = 
            this.state.regions.length === 0 ? 
            searchedRestaurantArray : 
            searchedRestaurantArray.filter(restaurant => this.state.regions.includes(restaurant.city));
        let filteredRestaurantArray = 
            this.state.cuisines.length === 0 ?
            regionSearchedRestaurantArray :
            regionSearchedRestaurantArray.filter(restaurant => this.state.cuisines.includes(restaurant.cuisine));
        let sorry;
        if (filteredRestaurantArray.length === 0) {
            sorry = "Sorry, we have no results for that"
        } else {
            sorry = ""
        }
        let priceFilter1 = this.state.$ === "on" ? "price-filter-on" : "price-filter-off";
        let priceFilter2 = this.state.$$ === "on" ? "price-filter-on" : "price-filter-off";
        let priceFilter3 = this.state.$$$ === "on" ? "price-filter-on" : "price-filter-off";
        let priceFilter4 = this.state.$$$$ === "on" ? "price-filter-on" : "price-filter-off";
        let regions = [];
        if (this.props.restaurants) {
            this.props.restaurants.forEach(restaurant => (
                !regions.includes(restaurant.city) ? regions.push(restaurant.city) : null
            ))
        }
        let cuisines = [];
        if (this.props.restaurants) {
            this.props.restaurants.forEach(restaurant => (
                !cuisines.includes(restaurant.cuisine) ? cuisines.push(restaurant.cuisine) : null
            ))
        }             
        const defDate = this.props.location.state ? this.props.location.state.resDate : this.state.resDate;
        const defTime = this.props.location.state ? this.props.location.state.resTime : this.state.resTime;
        const defParty = this.props.location.state ? this.props.location.state.partySize : this.state.partySize;
        return (
            <div>
                <form className="search-page-search-form" >
                    <div className="date-time-peeps-search">
                        <div className="search-date" >
                            <input type="date" defaultValue={defDate}></input>
                        </div>
                        <div className="search-time">
                            <select className="time" defaultValue={defTime}>
                                <option value="8:00">8:00 AM</option>

                            </select>
                        </div>
                        <div className="search-peeps">
                            <select className="peeps" defaultValue={defParty}>
                                <option value="1">1 person</option>
                                <option value="2">2 people</option>
                            </select>
                        </div>
                    </div>
                    <input className="search-page-search-bar" id="search-page-search-bar" placeholder="Search a restaurant name, location, or cuisine"
                        defaultValue={this.state.searchWord}
                        >    
                    </input>
                    <button className="find-a-table-button" onClick={this.update}>Find a table</button>
                    <button className="clear-search-and-filter" onClick={() => setTimeout(function () {window.location.reload()})}>Clear search and filters</button>
                </form>
                <div id="search-output">
                    {this.whatDidISearchFor()}
                    <br></br>
                    {sorry}
                </div>
                <div className="filters">
                    <form>
                        <div className="price-filter-title">
                            <img className="dollars" src={window.dollars} />
                            <h1>Price</h1>
                        </div>
                        <div className="price-filters">
                            <input className={priceFilter1} type="submit" value="$" onClick={this.togglePrice("$")} ></input>
                            <input className={priceFilter2} type="submit" value="$$"onClick={this.togglePrice("$$")} ></input>
                            <input className={priceFilter3} type="submit" value="$$$"onClick={this.togglePrice("$$$")} ></input>
                            <input className={priceFilter4} type="submit" value="$$$$"onClick={this.togglePrice("$$$$")} ></input>
                        </div> 
                    </form>
                    <form>
                        <div className="regions-filter-title">
                            <i className='fas fa-map-marker'></i>
                            <h1>Regions</h1>
                        </div>
                        <div className="region-filters">
                            {regions.sort().map(region => (
                                <div>
                                    <input className="region" type="checkbox" onChange={() => this.toggleFilter(region, "regions")}></input>
                                    <label className="region-label">{region}</label>
                                </div>
                            ))}
                        </div> 
                    </form>
                    <form>
                        <div className="cuisines-filter-title">
                            <img className="fork_knife" src={window.fork_knife} />
                            <h1 className="cuisine-filter-title">Cuisines</h1>
                        </div>
                        <div className="region-filters">
                            {cuisines.sort().map(cuisine => (
                                <div>
                                    <input className="region" type="checkbox" onChange={() => this.toggleFilter(cuisine, "cuisines")}></input>
                                    <label className="region-label">{cuisine}</label>
                                </div>
                            ))}
                        </div>
                    </form>
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