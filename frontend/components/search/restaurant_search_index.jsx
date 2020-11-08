import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantSearchIndex extends React.Component {
    constructor(props) {
        super(props);
        let newDate = new Date()
        let date = newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();    
        this.state = {
            searchWord: '',
            $: 'off',
            $$: 'off',
            $$$: 'off',
            $$$$: 'off',
            regions: [],
            cuisines: [],
            partySize: '2',
            resDate: year + '-' + month + '-' + date,
            resTime: '7:00 PM'
        };
        // this.searchFunction = this.searchFunction.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.togglePrice = this.togglePrice.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);
        this.makeResTimes = this.makeResTimes.bind(this);
        this.makeTableTimes = this.makeTableTimes.bind(this);
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
            searchWord: document.getElementById("search-page-search-bar").value,
            resDate: document.getElementById("date-select-search").value,
            resTime: document.getElementById("time-select-search").value,
            partySize: document.getElementById("party-select-search").value,
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

    makeResTimes() {
        const allTimes = []
        for (let i = 1; i < 12; i++) {
            allTimes.push(`${i}:00 AM`);
            allTimes.push(`${i}:30 AM`);
        }
        allTimes.push(`12:00 PM`);
        allTimes.push(`12:30 PM`);
        for (let i = 1; i < 12; i++) {
            allTimes.push(`${i}:00 PM`);
            allTimes.push(`${i}:30 PM`);
        }
        const resSelectArray = [];
        const givenTime = document.getElementById("time-select-search") ? document.getElementById("time-select-search").value : "7:00 PM";
        resSelectArray.push(givenTime);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 1]);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 2]);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 3]);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 4]);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 5]);

        return resSelectArray;
    }

    makeTableTimes() {
        const times = [];
        let i;
        for (i = 7; i < 24; i += 0.5) {
            let minsNum = i * 60;
            var hours = Math.floor(minsNum / 60);
            var minutes = minsNum % 60;
            if (minutes === 0 && hours < 12) {
                times.push(hours + ":00 AM")
            } else if (minutes === 0 && hours === 12) {
                times.push("12:00 PM");
            } else if (minutes === 0 && hours > 12) {
                times.push(hours - 12 + ":00 PM")
            } else if (minutes > 0 && hours < 12) {
                times.push(hours + ":30 AM")
            } else if (minutes > 0 && hours === 12) {
                times.push("12:30 PM")
            } else if (minutes > 0 && hours > 12) {
                times.push(hours - 12 + ":30 PM")
            }
        }

        return times
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
        const resTimes = this.makeResTimes();
        const parties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return (
            <div>
                <form className="search-page-search-form" >
                    <div className="date-time-peeps-search">
                        <div className="search-date" >
                            <input type="date" defaultValue={defDate} id="date-select-search" onChange={this.update}></input>
                        </div>
                        <div className="search-time">
                            <select className="time" defaultValue={defTime} id="time-select-search" onChange={this.update}>
                                {this.makeTableTimes().map((time, i) => (
                                    <option value={time} key={i}>{time}</option>
                                ))}
                            </select>
                        </div>
                        <div className="search-peeps">
                            <select className="peeps" defaultValue={defParty} id="party-select-search" onChange={this.update}>
                                    <option value="2">For 2</option>
                                {parties.map(party => (
                                    <option value={party}>For {party}</option>
                                ))}
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
                            <div className="restaurant-search-card">
                            <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id} className="restaurant-search-card-link">
                                <img className="search-pic" src={restaurant.main_photo} />
                            </Link>
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
                                    <div className="res-times">
                                        {this.props.currentUser ?
                                            resTimes.map(time => (
                                                <Link to={{
                                                    pathname: `/restaurants/${restaurant.id}/reservation_form`,
                                                    state: {
                                                        resDate: this.state.resDate,
                                                        resTime: time,
                                                        partySize: this.state.partySize,
                                                    },
                                                }} key={restaurant.id} className="res-time-link" >
                                                    <button className="res-time" >{time}</button>
                                                </Link>
                                            ))
                                            :
                                            resTimes.map(time => (                                              
                                                <button className="res-time" onClick={() => window.alert("Please signup, signin, or demo-signin to continue.")}>{time}</button>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                    ))}


                </div>
                
            </div>

        )
    }

}

export default RestaurantSearchIndex;