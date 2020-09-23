import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { signup, signin, signout } from "./actions/session_actions"

import * as APIUtil from "./util/session_api_util";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    const store = configureStore();

    window.signin = signin;
    window.signup = signup;
    window.signout = signout;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store}/>, root)
})