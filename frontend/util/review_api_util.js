export const fetchRestaurantReviews = (restaurantId) => (
    $.ajax({
        method: 'GET',
        url: '/api/reviews',
        data: { restaurantId }
    })
);

export const createReview = (review) => (
    $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    })
);

export const fetchReview = (reviewId) => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews/${reviewId}`
    })
);

export const deleteReview = reviewId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    })
);