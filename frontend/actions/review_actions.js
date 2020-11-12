import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

const cancelReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
});

export const fetchRestaurantReviews = (restaurantId) => dispatch => (
    APIUtil.fetchRestaurantReviews(restaurantId).then(reviews => 
        (dispatch(receiveReviews(reviews))),
            err => (dispatch(receiveReviewErrors(err.responseJSON))))
);

export const fetchReview = (reviewId) => dispatch => (
    APIUtil.fetchReview(reviewId).then(payload =>
        (dispatch(receiveReview(payload))),
        err => (dispatch(receiveReviewErrors(err.responseJSON))))
);

export const createReview = review => dispatch => (
    APIUtil.createReview(review)
        .then((payload) => {
            dispatch(receiveReview(payload));
        }, err => (dispatch(receiveReviewErrors(err.responseJSON))))
);

export const deleteReview = id => dispatch => (
    APIUtil.deleteReview(id).then(reviewId => 
        dispatch(cancelReview(reviewId)),
            err => dispatch(receiveReviewErrors(err.responseJSON))
        )
);