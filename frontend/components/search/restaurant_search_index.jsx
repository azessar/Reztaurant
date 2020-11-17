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
            // partySize: '2',
            partySize: '',
            // resDate: year + '-' + month + '-' + date,
            resDate: '',
            // resTime: '7:00 PM',
            resTime: '',
            filtered: false,
            filterClicked: 0
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
        window.scrollTo(0, 0);
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
                    [price]: 'on',
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
        this.setState(prevState => {
            return { filterClicked: prevState.filterClicked + 1 }
        })
        if (!this.state[field].includes(filter)) {
            var newState = this.state[field].concat(filter)
            this.setState({
                [field]: newState,
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
        let allTimes = []
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
        let resSelectArray = [];
        let givenTime = document.getElementById("time-select-search") ? document.getElementById("time-select-search").value : "7:00 PM";
        resSelectArray.push(givenTime);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 1]);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 2]);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 3]);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 4]);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 5]);

        return resSelectArray;
    }

    makeTableTimes() {
        let times = [];
        let i;
        for (i = 7; i < 21.5; i += 0.5) {
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
        console.log(this.state)
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
        // let resTimes = this.state.filtered ? [] : this.makeResTimes();
        let resTimes = this.makeResTimes();
        const parties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return (
            <div>
                <form className="search-page-search-form" >
                    <div className="date-time-peeps-search">
                        <div className="search-date" >
                            <input type="date" defaultValue={defDate} id="date-select-search" onChange={this.update}></input>
                        </div>
                        <div className="search-time">
                            <select className="time" defaultValue={defTime} id="time-select-search" >
                                    <option value="7:00 PM" key="def">7:00 PM</option>
                                {this.makeTableTimes().map((time, i) => (
                                    <option value={time} key={i}>{time}</option>
                                ))}
                            </select>
                        </div>
                        <div className="search-peeps">
                            <select className="peeps" defaultValue={defParty} id="party-select-search" onChange={this.update}>
                                    <option value="2" key="def">For 2</option>
                                {parties.map((party,i) => (
                                    <option value={party} key={i}>For {party}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <input className="search-page-search-bar" id="search-page-search-bar" placeholder="Search a name, location, or cuisine, e.g.: 'New York'"
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
                            {regions.sort().map((region,i) => (
                                <div key={i}>
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
                            {cuisines.sort().map((cuisine,i) => (
                                <div key={i}>
                                    <input className="region" type="checkbox" onChange={() => this.toggleFilter(cuisine, "cuisines")}></input>
                                    <label className="region-label">{cuisine}</label>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
                <div className="restaurant-search-cards" id="restaurant-search-cards">
                    {filteredRestaurantArray.map((restaurant,i) => (
                            <div className="restaurant-search-card" key={i}>
                            <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id} className="restaurant-search-card-link">
                                <img className="search-pic" src={restaurant.main_photo} />
                            </Link>
                                <div className="search-info">
                                    <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id} className="restaurant-search-card-link">
                                        <div className="card-name">{restaurant.name}</div>
                                    </Link>
                                    <div className="cuisine-price-area">{restaurant.address} - {restaurant.city}</div>
                                    <div className="cuisine-price-area">{restaurant.cuisine} - {this.priceConversion(restaurant.avg_price)} - {restaurant.city}, {restaurant.state}</div>
                                    <div className="res-times">
                                        {/* THIS KEEPS ON MAKING MORE TIMES ON EACH RE-RENDER */}
                                        {resTimes.map((time, i) => 
                                                <Link to={{
                                                    pathname: `/restaurants/${restaurant.id}/reservation_form`,
                                                    state: {
                                                        resDate: this.props.location.state ? this.props.location.state.resDate : this.state.resDate,
                                                        resTime: this.props.location.state ? this.props.location.state.resTime : time, 
                                                        partySize: this.props.location.state ? this.props.location.state.partySize : this.state.partySize,
                                                    },
                                                }} key={i} className="res-time-link" >
                                                    <button className="res-time" >{time}</button>
                                                </Link>
                                            )
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