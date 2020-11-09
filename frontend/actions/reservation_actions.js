import * as APIUtil from '../util/reservation_api_util';

export const RECEIVE_ALL_RESERVATIONS = 'RECEIVE_ALL_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const DELETE_RESERVATION = 'DELETE_RESERVATION';
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';

const receiveAllReservations = (reservations) => ({
    type: RECEIVE_ALL_RESERVATIONS,
    reservations
});

const receiveSingleReservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation,
});

const destroyReservation = (reservationId) => ({
    type: DELETE_RESERVATION,
    reservationId
});


const receiveReservationErrors = (errors) => ({
    type: RECEIVE_RESERVATION_ERRORS,
    errors
});

export const createReservation = reservation => dispatch => (
    APIUtil.createReservation(reservation)
        .then((payload) => {
            dispatch(receiveSingleReservation(payload));
        }, err => (dispatch(receiveReservationErrors(err.responseJSON))))
);

export const requestUserReservations = userId => dispatch => (
    APIUtil.fetchUserReservations(userId)
        .then(reservations => dispatch(receiveAllReservations(reservations)),
            err => dispatch(receiveReservationErrors(err.responseJSON)))
);

export const requestSingleReservation = (id) => dispatch => (
    APIUtil.fetchReservation(id)
        .then(reservation => {
            dispatch(receiveSingleReservation(reservation));
        })
);

export const deleteReservation = id => dispatch => (
    APIUtil.deleteReservation(id)
        .then(reservationId => dispatch(destroyReservation(reservationId)),
            err => dispatch(receiveReservationErrors(err.responseJSON))
        )
);