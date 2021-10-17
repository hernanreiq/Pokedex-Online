import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../views/index";
import Header from "../views/partials/header";

class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/home" component={Index} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;