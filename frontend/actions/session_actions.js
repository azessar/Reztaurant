import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const SIGNOUT_USER = 'SIGNOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const signoutUser = () => ({
    type: SIGNOUT_USER,
});

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

//thunk above, regular action below

export const signup = user => dispatch => {
    return APIUtil.signup(user).then(user => (
            dispatch(receiveUser(user))
        ), errorObject => (
            dispatch(receiveSessionErrors(errorObject.responseJSON))
        ))
};

export const signin = user => dispatch => {
    return APIUtil.signin(user).then(user => (
            dispatch(receiveUser(user))
        ), errorObject => (
            dispatch(receiveSessionErrors(errorObject.responseJSON))
        ))
};

export const signout = () => dispatch => {
    return APIUtil.signout().then(user => (
            dispatch(signoutUser())
        ))
};