import { connect } from 'react-redux';
import { signout, signin, signup } from '../../actions/session_actions';
import GreetingHeader from './greeting';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors
    }
}

const mDTP = dispatch => {
    return {
        signout: () => dispatch(signout()),
        signin: (user) => dispatch(signin(user)),
        signup: (user) => dispatch(signup(user))
    }

}

export default connect(mSTP, mDTP)(GreetingHeader);