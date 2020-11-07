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
                                
                            </select>
                        </div>
                        <div className="search-peeps">
                            <select className="peeps" defaultValue="2 people">
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