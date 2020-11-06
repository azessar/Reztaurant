import { RECEIVE_ALL_RESERVATIONS, RECEIVE_RESERVATION, DELETE_RESERVATION } from '../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_RESERVATIONS:
            return action.reservations;
        case RECEIVE_RESERVATION:
            return merge({}, state, { [action.reservation.id]: action.reservation });
        case DELETE_RESERVATION:
            let newState = merge({}, state);
            delete newState[action.reservationId];
            return newState;
        default:
            return state;
    }
}

export default reservationsReducer;