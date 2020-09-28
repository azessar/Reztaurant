import RestaurantIndexItem from "./restaurant_index_item.jsx";
import { connect } from 'react-redux';
import { fetchRestaurant, fetchRestaurants } from "../../actions/restaurant_actions.js";

const mSTP = (state, ownProps) => {
    console.log(state)
    return {
        restaurants: Object.values(state.entities.restaurants),
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
});

export default connect(mSTP, mDTP)(RestaurantIndexItem);