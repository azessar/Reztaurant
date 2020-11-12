import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { createReservation, requestSingleReservation, requestUserReservations, deleteReservation} from '../../actions/reservation_actions';
import { signout, signin, signup, fetchUsers } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions.js';
import { fetchRestaurantReviews, fetchReview, createReview, deleteReview } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        currentUser: state.entities.users[state.session.id],
        reviews: Object.values(state.entities.reviews),
        // reviews: Object.values(state.entities.reviews).filter(review => {
        //     review.restaurant_id === restaurant.id;
        // })
        users: Object.values(state.entities.users)
    };
};

const mDTP = (dispatch) => {
    return {
        
        fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),

        createReservation: reservation => dispatch(createReservation(reservation)),
        requestSingleReservation: id => dispatch(requestSingleReservation(id)),
        requestUserReservations: userId => dispatch(requestUserReservations(userId)),
        deleteReservation: id => dispatch(deleteReservation(id)),
        signin: (user) => dispatch(signin(user)),
        signup: (user) => dispatch(signup(user)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),

        fetchRestaurantReviews: (restaurantId) => dispatch(fetchRestaurantReviews(restaurantId)),
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
        createReview: review => dispatch(createReview(review)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        fetchUsers: () => dispatch(fetchUsers()),
    }
};

export default connect(mSTP, mDTP)(RestaurantShow);