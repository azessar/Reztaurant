import { connect } from 'react-redux';
import SignupModal from './signup_modal';
import { signup, signin, clearErrors } from '../../actions/session_actions';
import React from 'react';


const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session,
        formType: 'signup'
    }
}

const mDTP = dispatch => {
    return {
        signin: (user) => dispatch(signin(user)),
        signup: (user) => dispatch(signup(user)),
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signin'))}>
                Sign in
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SignupModal);