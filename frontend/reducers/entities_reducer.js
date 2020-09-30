import { combineReducers } from "redux";

import restaurantsReducer from "./restaurants_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer
});

export default entitiesReducer;