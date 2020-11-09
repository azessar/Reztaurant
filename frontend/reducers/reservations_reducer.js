import { RECEIVE_ALL_RESERVATIONS, RECEIVE_RESERVATION, DELETE_RESERVATION } from '../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_RESERVATIONS:
            return Object.assign({}, action.reservations);
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, { [action.reservation.id]: action.reservation });
        case DELETE_RESERVATION:
            let newState = Object.assign({}, state);
            delete newState[action.resId];
            return newState;
        default:
            return state;
    }
}

export default reservationsReducer;