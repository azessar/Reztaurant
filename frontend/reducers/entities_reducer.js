import { combineReducers } from "redux";

import restaurantsReducer from "./restaurants_reducer";
import usersReducer from "./users_reducer";
import reservationsReducer from "./reservations_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    reservations: reservationsReducer
});

export default entitiesReducer;