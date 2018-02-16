import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Aditya Chatterjee</h1>
          <h2>Graduate student at the University of Washington, aspiring software engineer</h2>
          <ul className="header">
            <li><NavLink exact to="/">About</NavLink></li>
            <li><NavLink to="/Projects">Projects</NavLink></li>
            <li><NavLink to="/Blog">Blog</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={About}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Blog" component={Blog}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;