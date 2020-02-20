import {
   
    Switch,
    Route,
 
   
} from "react-router-dom";
import React, { Component } from 'react';

import { routes } from "./RouterConfig";

export class RouterURL extends Component {

    showRoutes = ()=>{
        var result = [];
        if(routes.length > 0){
            result = routes.map((e, index)=>
                
                <Route
                    path ={e.path}
                    exact = {e.exact}
                    component={e.main}
                    key ={index}
                >
                </Route>
            )
        }
        return result;
    }

    render() {
        return (
                       
            <Switch>
            {/* <Route exact path="/" component={Home}>
                
            </Route>
            <Route  path="/quan-ly-san-pham" component={QuanLySanPham}>
            </Route>
            <Route  path="/them" component={Add}>
            </Route> */}
            {this.showRoutes()};
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
