import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_RESTAURANT_ERRORS';

export const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants: restaurants
});

export const receiveRestaurant = ({ restaurant }) => ({
    type: RECEIVE_RESTAURANT,
    restaurant

});

export const receiveRestaurantErrors = (errors) => {
    return {
        type: RECEIVE_RESTAURANT_ERRORS,
        errors
    };
};

export const fetchRestaurants = () => dispatch => {
    return APIUtil.fetchRestaurants().then(restaurants => {
        return dispatch(receiveRestaurants(restaurants))
    })
};

export const fetchRestaurant = id => dispatch => {
    return (
        APIUtil.fetchRestaurant(id).then(payload => (
            dispatch(receiveRestaurant(payload))
        ))
    )
};

export const searchRestaurants = searchWord => dispatch => {
    // debugger
    return APIUtil.fetchRestaurantsSearch(searchWord).then(searchReturn =>
        dispatch(receiveRestaurants(searchReturn)),
        errors => dispatch(receiveRestaurantErrors(errors.responseJSON)));
};