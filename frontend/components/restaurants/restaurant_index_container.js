import RestaurantIndex from "./restaurant_Index.jsx";
import { connect } from 'react-redux';
import { fetchRestaurant, fetchRestaurants } from "../../actions/restaurant_actions.js";
import { fetchRestaurantReviews, fetchReviews, createReview, deleteReview } from '../../actions/review_actions';
import { requestAllReservations } from "../../actions/reservation_actions.js";

const mSTP = (state, ownProps) => {
    return {
        restaurants: Object.values(state.entities.restaurants),
        currentUser: state.entities.users[state.session.id],
        reviews: Object.values(state.entities.reviews),
        reservations: Object.values(state.entities.reservations),
    }
}

const mDTP = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
    fetchRestaurantReviews: (restaurantId) => dispatch(fetchRestaurantReviews(restaurantId)),
    fetchReviews: () => dispatch(fetchReviews()),
    requestAllReservations: () => dispatch(requestAllReservations()),
});

export default connect(mSTP, mDTP)(RestaurantIndex);