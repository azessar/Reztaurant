export const fetchRestaurants = () => (
    $.ajax({
        method: 'GET',
        url: 'api/restaurants'
    })
);

export const fetchRestaurant = id => (
    $.ajax({
        method: 'GET',
        url: `api/restaurants/${id}`
    })
);

export const fetchRestaurantsSearch = searchWord => {
    // debugger
    return $.ajax({
        method: 'GET',
        url: 'api/restaurants',
        data: { searchWord }
    });
};