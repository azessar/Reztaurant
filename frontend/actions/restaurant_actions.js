import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants: restaurants
});

export const receiveRestaurant = ({ restaurant }) => ({
    type: RECEIVE_RESTAURANT,
    restaurant

});

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