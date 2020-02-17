import {
   
    Switch,
    Route,
 
   
} from "react-router-dom";
import React, { Component } from 'react';
import Home from "../Components/Home";
import Xem from "../Components/Xem";
import Add from "../Components/Add";

export class RouterURL extends Component {
    render() {
        return (
                       
            <Switch>
            <Route exact path="/" component={Home}>
                
            </Route>
            <Route  path="/xem" component={Xem}>
            </Route>
            <Route  path="/them" component={Add}>
            </Route>
           
            {/* <Route  component={Home}>
                
            </Route> */}
            {/* <Route exact path="/home" component={Home}>
                
            </Route>
            <Route exact path="/contact" component={Contact}>
            </Route>
            <Route path="/product">
                <Product />
            </Route>
            <Route path='/chi-tiet/:slug/:id' component={Detail} /> */}
        </Switch>
        );
    }
}

export default RouterURL;
