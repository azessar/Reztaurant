import React from 'react';
import { Link } from 'react-router-dom';

class MainSearch extends React.Component {
    constructor(props) {
        super(props);

        let newDate = new Date()
        let date = newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();        
        this.state = {
            searchWord: '',
            resDate: year + '-' + month + '-' + date,
            resTime: '',
            partySize: '',
        };

        this.update = this.update.bind(this);
        this.makeTableTimes = this.makeTableTimes.bind(this);
    }

    update(e){
        e.preventDefault();

        this.setState((state) => {
            return { 
                searchWord: document.getElementById("main-search-bar").value,
                resDate: document.getElementById("main-search-date").value,
                resTime: document.getElementById("main-search-time").value,
                partySize: document.getElementById("main-search-peeps").value,
            }
        });
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
        const parties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return (
            <div className="main-search-div">
                <form className="main-search-form">
                    <div className="date-time-peeps">
                        <div className="search-date" >
                            <input type="date" defaultValue={this.state.resDate} id="main-search-date" onChange={this.update}></input>
                        </div>
                        <div className="search-time">
                            <select className="time" defaultValue="7:00 PM" id="main-search-time" onChange={this.update}>
                                {this.makeTableTimes().map((time, i) => (
                                    <option value={time} key={i}>{time}</option>
                                ))}                                
                            </select>
                        </div>
                        <div className="search-peeps">
                            <select className="peeps" defaultValue="2 people" id="main-search-peeps" onChange={this.update}>
                                    <option value="2">For 2</option>
                                {parties.map((party,i) => (
                                    <option value={party} key={i}>For {party}</option>
                                ))}
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
                            searchWord: this.state.searchWord,
                            resDate: this.state.resDate,
                            resTime: this.state.resTime,
                            partySize: this.state.partySize
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