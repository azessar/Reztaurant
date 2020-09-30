import { connect } from 'react-redux';
import SigninModal from './signin_modal';
import React from 'react';
import { signup, signin, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.entities.users[state.session.id],
        formType: 'signin'
    }
}

const mDTP = dispatch => {
    return {
        signin: (user) => dispatch(signin(user)),
        signup: (user) => dispatch(signup(user)),
        processForm: (user) => dispatch(signin(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Sign up
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SigninModal);