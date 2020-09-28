import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const mSTP = (state, ownProps) => {
    return {
        restaurant: state.entities.restaurants.[ownProps.match.params.id],
        currentUser: state.entities.users[state.session.id],
    };
};

const mDTP = (dispatch) => ({
    requestRestaurant: (id) => dispatch(requestRestaurant(id))
});

export default connect(mSTP, mDTP)(RestaurantShow);