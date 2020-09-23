import { connect } from 'react-redux';
import SigninModal from './signin_modal';
import { signup, signin } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        errors: state,
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        signin: (user) => dispatch(signin(user)),
        signup: (user) => dispatch(signup(user))
    }
}

export default connect(mSTP, mDTP)(SigninModal);