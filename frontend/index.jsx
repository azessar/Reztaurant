import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { signup, signin, signout } from "./actions/session_actions";
import { fetchRestaurants } from "./actions/restaurant_actions"

import * as APIUtil from "./util/session_api_util";


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById("root");
    window.signin = signin;
    window.signup = signup;
    window.signout = signout;

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchRestaurants = fetchRestaurants;

    ReactDOM.render(<Root store={store}/>, root)
})