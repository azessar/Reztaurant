import React from 'react';
import { Link } from 'react-router-dom';

class MainSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchWord: '',
        };

        this.update = this.update.bind(this);
    }

    update(e){
        e.preventDefault();
        // this.setState({
        //     searchWord: document.getElementById("main-search-bar").value
        // });

        this.setState((state) => {
            return { searchWord: document.getElementById("main-search-bar").value }
        });
    }


    render() {
        return (
            <div className="main-search-div">
                <form className="main-search-form">
                    <div className="date-time-peeps">
                        <div className="search-date" >
                            <input type="date" defaultValue="2020-10-02"></input>
                        </div>
                        <div className="search-time">
                            <select className="time" defaultValue="7:00 PM">
                                <option value="8:00">8:00 AM</option>
                                <option value="8:30">8:30 AM</option>
                                <option value="9:00">9:00 AM</option>
                                <option value="9:30">9:30 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="10:30">10:30 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="11:30">11:30 AM</option>
                                <option value="12:00">12:00 PM</option>
                                <option value="12:30">12:30 PM</option>
                                <option value="13:00">1:00 PM</option>
                                <option value="13:30">1:30 PM</option>
                                <option value="14:00">2:00 PM</option>
                                <option value="14:30">2:30 PM</option>
                                <option value="15:00">3:00 PM</option>
                                <option value="15:30">3:30 PM</option>
                                <option value="16:00">4:00 PM</option>
                                <option value="16:30">4:30 PM</option>
                                <option value="17:00">5:00 PM</option>
                                <option value="17:30">5:30 PM</option>
                                <option value="18:00">6:00 PM</option>
                                <option value="18:30">6:30 PM</option>
                                <option value="19:00">7:00 PM</option>
                                <option value="19:30">7:30 PM</option>
                                <option value="20:00">8:00 PM</option>
                                <option value="20:30">8:30 PM</option>
                                <option value="21:00">9:00 PM</option>
                                <option value="21:30">9:30 PM</option>
                                <option value="22:00">10:00 PM</option>
                                <option value="22:30">10:30 PM</option>
                                <option value="23:00">11:00 PM</option>
                                <option value="23:30">11:30 PM</option>
                            </select>
                        </div>
                        <div className="search-peeps">
                            <select className="peeps" defaultValue="2 people">
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
                        <input className="location-restaurant-cuisine" 
                            id="main-search-bar" placeholder="Location, Restaurant, or Cuisine" 
                            defaultValue={this.state.searchWord}
                            onChange={this.update}
                            >
                        </input>
                    </div>

                    <Link to={{
                        pathname: "/restaurants",
                        state: {
                            searchWord: this.state.searchWord
                        },
                    }}>
                        <button className="lets-go-button">Let's go</button>
                    </Link>

                </form>
            </div>
        )
    }
}

export default MainSearch;