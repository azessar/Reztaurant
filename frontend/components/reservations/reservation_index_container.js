import { connect } from 'react-redux';
import ReservationIndex from './reservation_index';
import { fetchRestaurant, fetchRestaurants } from '../../actions/restaurant_actions';
import { createReservation, requestSingleReservation, requestUserReservations, deleteReservation, requestAllReservations } from '../../actions/reservation_actions'

const mSTP = (state, ownProps) => {
    return {
        restaurants: Object.values(state.entities.restaurants),
        reservation: state.entities.reservations[ownProps.match.params.reservationId],
        reservations: Object.values(state.entities.reservations),
        currentUser: state.entities.users[state.session.id],
    };
};

const mDTP = (dispatch) => {
    return {

        fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
        fetchRestaurants: () => dispatch(fetchRestaurants()),
        createReservation: reservation => dispatch(createReservation(reservation)),
        requestSingleReservation: id => dispatch(requestSingleReservation(id)),
        requestUserReservations: userId => dispatch(requestUserReservations(userId)),
        requestAllReservations: () => dispatch(requestAllReservations()), //right here
        deleteReservation: id => dispatch(deleteReservation(id)),
    }
};

export default connect(mSTP, mDTP)(ReservationIndex);