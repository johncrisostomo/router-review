import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
  authButton = () => {
    return <button>Sign In</button>;
  };

  render() {
    return (
      <Router>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              {this.authButton()}
            </li>
          </ul>
        </nav>
      </Router>
    );
  }
}

export default Header;
