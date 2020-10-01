import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class RestaurantMap extends React.Component {

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };
    }

    render() {
        return (
            <div className="map" ref="map">
                <div ref={map => this.mapNode = map}></div>
            </div>
        );
    }
}

export default RestaurantMap;