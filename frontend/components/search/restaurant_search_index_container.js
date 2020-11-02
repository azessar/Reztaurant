import RestaurantSearchIndex from "./restaurant_search_index.jsx";
import { connect } from 'react-redux';
import { fetchRestaurant, fetchRestaurants, searchRestaurants } from "../../actions/restaurant_actions.js";

const mSTP = (state, ownProps) => {
    return {
        restaurants: Object.values(state.entities.restaurants),
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants()),
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
        searchRestaurants: (searchWord) => dispatch(searchRestaurants(searchWord)),
    }
};

export default connect(mSTP, mDTP)(RestaurantSearchIndex);