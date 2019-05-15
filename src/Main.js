import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Prekes from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Ne barbora</h1>
            <ul className="header">
              <li><NavLink exact to="/">Prekes</NavLink></li>
              <li><NavLink to="/stuff">Krepselis</NavLink></li>
              <li><NavLink to="/contact">Susisiekite 
              su mumis</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Prekes}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;