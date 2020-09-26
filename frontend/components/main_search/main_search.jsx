import React from 'react';

class MainSearch extends React.Component {


    render() {
        return (
            <div className="main-search-div">
                <form className="main-search-form">
                    <div className="date-time-peeps">
                        <div className="search-date">
                            <input type="date"></input>
                        </div>
                        <div className="search-time">
                            <input type="time"></input>
                        </div>
                        <div className="search-peeps">
                            <select>
                                <option value="1">1 person</option>
                                <option value="2">2 people</option>
                                <option value="2">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 people</option>
                                <option value="6">6 people</option>
                                <option value="7">7 people</option>
                                <option value="8">8 people</option>
                                <option value="9">9 people</option>
                                <option value="10">10 people</option>
                                <option value="11">11 people</option>
                                <option value="12">12 people</option>
                                <option value="13">13 people</option>
                                <option value="14">14 people</option>
                                <option value="15">15 people</option>
                                <option value="16">16 people</option>
                                <option value="17">17 people</option>
                                <option value="18">18 people</option>
                                <option value="19">19 people</option>
                                <option value="20">20 people</option>
                                <option value="larger">larger party</option>
                            </select>
                        </div>
                    </div>
                    <div className="main-search-input">
                        <input className="location-restaurant-cuisine" placeholder="Location, Restaurant, or Cuisine"></input>
                    </div>

                    <button className="lets-go-button">Let's go</button>

                </form>
            </div>
        )
    }
}

export default MainSearch;