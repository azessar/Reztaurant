import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);

        let newDate = new Date()
        let date = newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear(); 
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
            resDate: year + '-' + month + '-' + date,
            resTime: '7:00 PM',
            partySize: '2',
            stateResTimes: [],
        }

        this.makeResTimes = this.makeResTimes.bind(this);
        this.makeTableTimes = this.makeTableTimes.bind(this);
        this.showTimes = this.showTimes.bind(this);
        this.reshowButton = this.reshowButton.bind(this);

        this.update = this.update.bind(this);

        this.reviewUser = this.reviewUser.bind(this);
        this.reviewFN = this.reviewFN.bind(this);
        this.reviewLN = this.reviewLN.bind(this);
        this.reviewPDL = this.reviewPDL.bind(this);

        this.avgRating = this.avgRating.bind(this);
        this.totalUserReviews = this.totalUserReviews.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
        this.props.fetchRestaurantReviews(this.props.match.params.restaurantId);
        this.props.fetchUsers();
    }

    update(e) {
        e.preventDefault();

        this.setState((state) => {
            return {resDate: document.getElementById("date-select").value,
                    resTime: document.getElementById("time-select").value,
                    partySize: document.getElementById("party-select").value,
            }
        });
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
        // this.setState({ stateResTimes: resSelectArray });

    }

    showTimes(event) { //Thank you to: https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
        event.preventDefault();

        this.setState({ showTimesButtonClicked: true });
    }
    reshowButton(event) { //Thank you to: https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
        event.preventDefault();

        this.setState({ showTimesButtonClicked: false });
    }

    reviewUser(userId, column){
        const users = this.props.users;
        var userData = users.find(user => user.id === userId) ? users.find(user => user.id === userId) : {first_name: "unknown", last_name: "unknown", primary_dining_location: "unknown"}
        console.log(typeof userData)
        return userData[column]
    }
    reviewFN(userId) {
        const users = this.props.users;
        var userData = users.find(user => user.id === userId)
        return userData.first_name
    }
    reviewLN(userId) {
        const users = this.props.users;
        var userData = users.find(user => user.id === userId)
        return userData.last_name
    }
    reviewPDL(userId) {
        const users = this.props.users;
        var userData = users.find(user => user.id === userId)
        return userData.primary_dining_location
    }

    avgRating(){
        const restaurantReviews = this.props.reviews.filter(review =>
            review.restaurant_id === this.props.restaurant.id
        )
        let totalScore = 0
        restaurantReviews.forEach(review => totalScore += review.rating)
        return (totalScore / restaurantReviews.length) ? totalScore / restaurantReviews.length : 1
    }

    totalUserReviews(userId){
        const reviews = this.props.reviews;
        return this.props.reviews.filter(review =>
            review.user_id === userId
        ).length
    }

    handleCancel(reviewId) {
        return e => {
            e.preventDefault();
            this.props.deleteReview(reviewId);
            window.location.reload();
        };
        // e.preventDefault();
        // const { deleteReview } = this.props;
        // const review = this.props.reviews[parseInt(e.target.id) - 1];
        // deleteReview(review.id);
        // console.log("deleted")
        // window.location.reload();
    }

    render(){
        const currentUser = this.props.currentUser;
        const restaurant = this.props.restaurant;
        const reviews = this.props.reviews;
        const users = this.props.users;
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
        if (!reviews || reviews.length === 0) {
            return null;
        };
        if (!users || users.length === 0) {
            return null;
        };
        const restaurantReviews = reviews.filter(review => 
            review.restaurant_id === restaurant.id
        )
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
                        <div className="show-body-columns">
                            <div className="show-main-body">
                                <div className="overview-tabs">
                                    <div className="inner-overview-tab">
                                        <div className="overview-tab-div" id="overview-review">Overview</div>
                                        <div className="overview-tab-div" id="overview-review" onClick={() => window.scrollBy(0, 550)}>Photos</div>
                                        <div className="overview-tab-div" id="overview-review" onClick={() => window.scrollBy(0, 800)}>Reviews</div>
                                    </div>
                                </div>
                                <div className="big-restaurant-name">{restaurant.name} - {restaurant.city}</div>
                                <div className="rating-review-price-cuisine">
                                    <div className="stars-score">
                                        {[...Array(parseInt(this.avgRating().toFixed(0)))].map((e, i) => <i className='fas fa-star' key={i}></i>)}
                                        {[...Array(parseInt(5 - this.avgRating().toFixed(0)))].map((e, i) => <i className='fas fa-star' id="clear-star" key={i}></i>)}
                                        <div className="restaurant-score">{this.avgRating().toFixed(1)}</div>
                                    </div>
                                    <div className="show-reviews">
                                        <img className="review_blurb" src={window.review_blurb} />
                                        {restaurantReviews.length === 1
                                            ?
                                            <div className="review-num">{restaurantReviews.length} Review</div>
                                            :
                                            <div className="review-num">{restaurantReviews.length} Reviews</div>
                                        }
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
                                <div className="show-photos" id="reviews-scroll-here">
                                    <div className="photos-header">Photos</div>
                                    <div className="show-lower-photos">
                                        <img className="show-lower-photo" src={restaurant.main_photo} />
                                    </div>

                                </div>
                                
                               

                            </div>
                            <div className="show-right-side">
                                <div className="things-to-scroll">
                                    <div className="show-res-form">
                                        <div className="make-a-res">Make a reservation</div>
                                        <div className="party-size">Party size</div>

                                        <form className="right-show-res-form">
                                            <select className="for-two" defaultValue="For 2" id="party-select" onChange={this.update}>
                                                <option value="2">For 2</option>
                                                {parties.map((party, i) => (
                                                    <option value={party} key={i}>For {party}</option>
                                                ))}
                                            </select>
                                            <div className="date-time-head-show">
                                                <div>Date</div>
                                                <div>Time</div>
                                            </div>
                                            <div className="date-time-select-show">
                                                <input type="date" className="date-select-show" defaultValue={this.state.resDate} id="date-select" onChange={this.update}></input>
                                                <select className="time-select-show" id="time-select" defaultValue="7:00 PM" onChange={this.reshowButton, this.update}>
                                                    {this.makeTableTimes().map((time, i) => (
                                                        <option value={time} key={i}>{time}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            {
                                                this.state.showTimesButtonClicked
                                                    ? (
                                                        <div className="res-times">
                                                            {
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
                                                            }
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

                        </div>
                    <div className="show-photos" id="review-id">
                        {restaurantReviews.length === 1 ?
                            <h1 className="photos-header">What {restaurantReviews.length} person is saying</h1>
                            :
                            (restaurantReviews.length === 0 ?
                                <h1 className="photos-header">No reviews for this restaurant yet</h1>
                                :
                                <h1 className="photos-header">What {restaurantReviews.length} people are saying</h1>
                            )

                        }
                        <div className="review-cards">
                            {restaurantReviews.map((review, i) => (
                                <div className="review-card" key={i}>
                                    <div className="icon-name">
                                        {
                                            (currentUser && review.user_id === currentUser.id) ?
                                            <div className="user-initials">{this.reviewUser(review.user_id, "first_name").slice(0, 1).toUpperCase()}{this.reviewUser(review.user_id, "last_name").slice(0, 1).toUpperCase()}</div>
                                            :
                                            <div className="non-user-initials">{this.reviewUser(review.user_id, "first_name").slice(0, 1).toUpperCase()}{this.reviewUser(review.user_id, "last_name").slice(0, 1).toUpperCase()}</div>
                                        }
                                        <div className="user-name">{this.reviewUser(review.user_id, "first_name").slice(0, 1).toUpperCase() + this.reviewUser(review.user_id, "first_name").slice(1)}{this.reviewUser(review.user_id, "last_name").slice(0, 1).toUpperCase()}</div>
                                        <div className="user-city">{this.reviewUser(review.user_id, "primary_dining_location")}</div>
                                        {
                                            this.totalUserReviews(review.user_id) === 1
                                                ?
                                                <div className="user-count">{this.totalUserReviews(review.user_id)} review</div>
                                                :
                                                <div className="user-count">{this.totalUserReviews(review.user_id)} reviews</div>
                                        }

                                        {/* {
                                            (currentUser && review.user_id === currentUser.id) ?
                                                <div className="user-initials">{this.reviewFN(review.user_id).slice(0, 1).toUpperCase()}{this.reviewLN(review.user_id).slice(0, 1).toUpperCase()}</div>
                                                :
                                                <div className="non-user-initials">{this.reviewFN(review.user_id).slice(0, 1).toUpperCase()}{this.reviewLN(review.user_id).slice(0, 1).toUpperCase()}</div>
                                        }
                                        <div className="user-name">{this.reviewFN(review.user_id).slice(0, 1).toUpperCase() + this.reviewFN(review.user_id).slice(1)}{this.reviewLN(review.user_id).slice(0, 1).toUpperCase()}</div>
                                        <div className="user-city">{this.reviewPDL(review.user_id)}</div>
                                        {
                                            this.totalUserReviews(review.user_id) === 1
                                                ?
                                                <div className="user-count">{this.totalUserReviews(review.user_id)} review</div>
                                                :
                                                <div className="user-count">{this.totalUserReviews(review.user_id)} reviews</div>
                                        } */}


                                    </div>
                                    <div className="rating-and-text">
                                        <div className="rating-stars">
                                            {[...Array(review.rating)].map((e, i) => <i className='fas fa-star' key={i}></i>)}
                                            {[...Array(5 - review.rating)].map((e, i) => <i className='fas fa-star' id="clear-star" key={i}></i>)}
                                        </div>
                                        <div className="rating-numbers">Overall {review.rating}</div>
                                        <div className="review-text">{review.body}</div>
                                        {currentUser && review.user_id === currentUser.id ?
                                            <div id={parseInt(review.id)} onClick={this.handleCancel(review.id)} className="delete-review">
                                                Delete review
                                            </div>
                                            : null}
                                    </div>
                                </div>
                            ))}


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