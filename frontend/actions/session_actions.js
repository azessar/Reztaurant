import * as APIUtil from '../util/session_api_util';
import {closeModal} from './modal_actions'

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SIGNOUT_USER = 'SIGNOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const signoutUser = () => ({
    type: SIGNOUT_USER,
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});

//thunk above, regular action below

export const signup = user => dispatch => {
    return APIUtil.signup(user).then(user => {
            dispatch(receiveUser(user));
            dispatch(closeModal());
            }, errorObject => (
            dispatch(receiveSessionErrors(errorObject.responseJSON))
        ))
};

export const signin = user => dispatch => {
    return APIUtil.signin(user).then(user => {
            dispatch(receiveUser(user));
            dispatch(closeModal());
            }, errorObject => (
            dispatch(receiveSessionErrors(errorObject.responseJSON))
        ))
};

export const signout = () => dispatch => {
    return APIUtil.signout().then(user => (
            dispatch(signoutUser())
        ))
};

export const fetchUsers = () => dispatch => {
    return APIUtil.fetchUsers().then(users => {
        return dispatch(receiveUsers(users))
    })
};