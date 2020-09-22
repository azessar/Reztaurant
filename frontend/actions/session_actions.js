import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

//thunk above, regular action below

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveUser(user))
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(user => (
        dispatch(receiveUser(user))
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(user => (
        dispatch(logoutUser())
    ))
);