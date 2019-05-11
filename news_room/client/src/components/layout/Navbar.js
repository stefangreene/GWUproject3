import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { Link } from "react-router-dom";

class Navbar extends Component {
    
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Router>
              <Route />
              <Route to exact path="/" style={{fontFamily: "monospace"}} className="col s5 brand-logo center black-text">Chat Bar</Route>
            </Router>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;