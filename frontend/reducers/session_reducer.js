import {
    RECEIVE_USER,
    SIGNOUT_USER,
    RECEIVE_USERS
} from '../actions/session_actions';

const _nullSession = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return { id: action.user.id };
        case SIGNOUT_USER:
            return _nullSession;
        default:
            return state;
    }
};

export default sessionReducer;