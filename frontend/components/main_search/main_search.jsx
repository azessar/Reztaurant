import React from 'react';
import { Link } from 'react-router-dom';

class MainSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchWord: '',
            resDate: '',
            resTime: '',
            partySize: '',
        };

        this.update = this.update.bind(this);
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


    render() {
        return (
            <div className="main-search-div">
                <form className="main-search-form">
                    <div className="date-time-peeps">
                        <div className="search-date" >
                            <input type="date" defaultValue="2020-10-02" id="main-search-date" onChange={this.update}></input>
                        </div>
                        <div className="search-time">
                            <select className="time" defaultValue="7:00 PM" id="main-search-time" onChange={this.update}>
                                <option value="8:00">8:00 AM</option>
                                
                            </select>
                        </div>
                        <div className="search-peeps">
                            <select className="peeps" defaultValue="2 people" id="main-search-peeps" onChange={this.update}>
                                <option value="1">1 person</option>
                                <option value="2">2 people</option>
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