import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            times: [],
            currentTime: '',
            showTimesButtonClicked: false,
            timesMade: false,
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            primary_dining_location: '',
            showDrop: false,
        }

        this.makeResTimes = this.makeResTimes.bind(this);
        this.makeTableTimes = this.makeTableTimes.bind(this);
        this.showTimes = this.showTimes.bind(this);
        this.reshowButton = this.reshowButton.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { signin } = this.props;
        const { first_name, last_name, email, password, primary_dining_location } = this.state;
        signin({ first_name, last_name, email, password, primary_dining_location });
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            primary_dining_location: ''
        });
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        const { signin } = this.props;
        const { first_name, last_name, email, password, primary_dining_location } = this.state;
        const demoUser = { first_name: "Gordon", last_name: "Ramsay", email: "gramsay@gmail.com", password: "rubbish", primary_dining_location: "London" }
        signin(demoUser);
        e.target.reset();
    }

    priceConversion(price) {
        if (price < 15) {
            return '$15 and under'
        } else if (price < 30) {
            return '$15 to $30'
        } else if (price < 80) {
            return '$40 to $80'
        } else {
            return 'over $80'
        }
    }

    timeConversion(time) {
        let nextTime = new Date(time);
        let hours = nextTime.getUTCHours();
        let minutes = nextTime.getUTCMinutes();
        if (hours > 12) {
            const newHours = hours - 12;
            return `${newHours}:00 PM`
        } else if (hours === 12) {
            return `${hours}:00 PM`
        } else {
            return `${hours}:00 AM`
        }
    }

    makeTableTimes(){
        const restaurant = this.props.restaurant;
        const times = [];
        let i;
        for (i = new Date(restaurant.open_time).getUTCHours(); i < new Date(restaurant.close_time).getUTCHours(); i += 0.5) {
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

    makeResTimes(){
        const allTimes = []
        for(let i = 1; i < 12; i++) {
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
        const givenTime = document.getElementById("time-select") ? document.getElementById("time-select").value : "7:00 PM";
        resSelectArray.push(givenTime);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 1]);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 2]);
        resSelectArray.push(allTimes[allTimes.indexOf(givenTime) + 3]);
        return resSelectArray;
    }

    showTimes(event) { //Thank you to: https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
        event.preventDefault();

        this.setState({ showTimesButtonClicked: true });
        // this.makeResTimes();
    }
    reshowButton(event) { //Thank you to: https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
        event.preventDefault();

        this.setState({ showTimesButtonClicked: false });
        // this.makeResTimes();
    }


    

    render(){
        const restaurant = this.props.restaurant;
        if (!restaurant) {
            return null;
        };
        if (!restaurant.main_photo) {
            return null;
        };

        if (!restaurant.background_photo) {
            return null;
        };
      
        const parties = [1,2,3,4,5,6,7,8,9,10];
        const resTimes = this.makeResTimes();
        return(
            <div>
                <div className="restaurant-header-loc">
                    <Link to="/"><div className="show-home">Home</div></Link>
                    <div>United States</div>
                    <div>{restaurant.city} / {restaurant.state}</div>
                </div>
                <div className="show-body">
                    <div className="show-pic-goes-here">
                        {/* <img className="default_show_background" src={window.default_show_background} /> */}
                        <img className="main-background-show-image" src={restaurant.background_photo} />
                        {/* <div className="save-this-restaurant">Save this restaurant</div> */}
                    </div>
                    <div className="overview-tabs">
                        <div className="inner-overview-tab">
                            <div className="overview-tab-div">Overview</div>
                            <div className="overview-tab-div">Photos</div>
                            <div className="overview-tab-div">Popular dishes</div>
                            <div className="overview-tab-div">Menu</div>
                            <div className="overview-tab-div">Reviews</div>
                            <div className="overview-tab-div">Twitter</div>
                        </div>   
                    </div>
                  
                    <div className="show-body-columns">
                        <div className="show-main-body">
                            <div className="big-restaurant-name">{restaurant.name} - {restaurant.city}</div>
                            <div className="rating-review-price-cuisine">
                                <div className="stars-score">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <div className="restaurant-score">4.0</div>
                                </div>
                                <div className="show-reviews">
                                    <img className="review_blurb" src={window.review_blurb} />
                                    <div className="review-num">4469 Reviews</div>
                                </div>
                                <div className="money-stuff">
                                    <img className="dollars" src={window.dollars} />
                                    <div className="show-pricing">{this.priceConversion(restaurant.avg_price)}</div>
                                </div>
                                <div className="show-cuisine">
                                    <img className="fork_knife" src={window.fork_knife} />
                                    <div className="the-cuisine">{restaurant.cuisine}</div>
                                </div>
    
                            </div>
                            <div className="show-description">
                                <div className="description-text">{restaurant.description}</div>
                            </div>
                            <div className="show-photos">
                                <div className="photos-header">Photos</div>
                                <div className="show-lower-photos">
                                    <img className="show-lower-photo" src={restaurant.main_photo} />
                                </div>

                            </div>
                           
                        </div>
                        
                        
                        
                    </div>
                    

                    
                    <div className="show-res-form">
                        <div className="make-a-res">Make a reservation</div>
                        <div className="party-size">Party size</div>
                        
                        <form className="right-show-res-form">
                            <select className="for-two" defaultValue="For 2">
                                        <option value="2">For 2</option>
                                    {parties.map(party => (
                                        <option value={party}>For {party}</option>
                                    ))}
                            </select>
                            <div className="date-time-head-show">
                                <div>Date</div>
                                <div>Time</div>
                            </div>
                            <div className="date-time-select-show">
                                <input type="date" className="date-select-show" defaultValue="2020-10-02"></input>
                                <select className="time-select-show" id="time-select" defaultValue="7:00 PM" onChange={this.reshowButton}>
                                    {this.makeTableTimes().map((time, i) => (
                                        <option value={time} key={i}>{time}</option>
                                    ))}
                                </select>
                            </div>
                            
                            {
                                this.state.showTimesButtonClicked
                                    ? (
                                            <div className="res-times">
                                                {resTimes.map(time => (
                                                    <Link to={`/restaurants/${restaurant.id}/reservation_form`} key={restaurant.id} className="res-time-link">
                                                        <button className="res-time" value={time}>{time}</button>
                                                    </Link>
                                                ))}
                                            </div>
                                    )
                                    : (
                                        <button className="show-res-button" onClick={this.showTimes}>Show next available</button>
                                    )
                            }
                           
                        </form>
                    </div>

                  <div className="show-phone">
                        <div className="order-delivery">Order delivery or takeout</div>
                        <div className="takeout">Takeout</div>
                        <div className="phone-box">
                            <i className='fas fa-phone'></i>
                            <div>{restaurant.phone}</div>
                        </div>
                        <div className="takeout">Delivery</div>
                        <div className="four-boxes">
                            <div className="two-boxes">
                                <a href="https://www.trycaviar.com/"><img className="caviar" src={window.caviar} /></a>
                                <a href="https://www.ubereats.com/"><img className="ubereats" src={window.ubereats} /> </a>
                            </div>
                            <div className="two-boxes">
                                <a href="https://www.postmates.com/"><img className="postmates" src={window.postmates} /></a>
                                <a href="https://www.chownow.com/"><img className="chownow" src={window.chownow} /></a>
                            </div>
                        </div>
                  </div>

                    <div className="more-show-info">
                        <div className="hours-show-info">
                            <div className="info-header">
                                <i className='fas fa-clock'></i>
                                <div>Hours of operation:</div>
                            </div>
                            <div className="open-days-show">
                                Sun-Sat: {this.timeConversion(restaurant.open_time)} - {this.timeConversion(restaurant.close_time)}
                            </div>
                        </div>
                        <div className="address-show-info">
                            <div className="info-header">
                                <i className='fas fa-map-marker'></i>
                                <div className="address-header">Address:</div>
                            </div>
                            <div className="open-days-show">
                                 {restaurant.address}, {restaurant.city}, {restaurant.state} {restaurant.zip}
                            </div>
                        </div>
        
                        
                    </div>
                </div>
                <footer className="show-footer">
                    <div className="footer-text">
                        <div className="mock-opentable">
                            Mock OpenTable by Andrew Zessar, using Ruby, Rails, JS, React/Redux
                    </div>
                        <div className="real-opentable">
                            <a href="https://www.opentable.com/" target="_blank">Click here for the real OpenTable website</a>
                        </div>
                    </div>
                </footer>
                
            </div>
        )
    }
}

export default RestaurantShow;