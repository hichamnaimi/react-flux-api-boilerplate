import React from "react"
import { Route, IndexRoute } from "react-router"
import Main from "../components/Main"
import Store from "../components/Boutique"

// We have the static area over the application it s in Main
// we have what we render in the first meet Store and it s also if no route match

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={Store}/>
    </Route>
)