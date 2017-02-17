import React from "react"
import ReactDOM from "react-dom"
import {Router, browserHistory } from "react-router"
import Routes from "./config/Routes"

ReactDOM.render(
    <Router history={browserHistory}>
        {Routes}
    </Router>,
    document.getElementById("app")
);