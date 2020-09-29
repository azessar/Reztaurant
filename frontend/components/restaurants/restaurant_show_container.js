import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const mSTP = (state, ownProps) => {
    console.log(state)
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        currentUser: state.entities.users[state.session.id],
    };
};

const mDTP = (dispatch) => {
    return {
        fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
    }
};

export default connect(mSTP, mDTP)(RestaurantShow);