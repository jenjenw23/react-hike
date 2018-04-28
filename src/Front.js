import React, { Component } from "react";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import "./App.css";
import Auth from './Auth/Auth.js';
// possible error underneath on line 7 no Navbar or button?
import { Button } from 'react-bootstrap';

const auth = new Auth();
auth.login();

class Front extends Component {
  
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  
  render() {

    const { isAuthenticated } = this.props.auth;
    
    return (
        <div className="App">
        <div className="App-header">
          <Navbar />
          <div><a href="tomlachance.com">Auth0 - React</a></div>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
        </div>
      <div className='ui unstackable items'>
      </div>
      </div>
    );
  }
}
export default Front;

