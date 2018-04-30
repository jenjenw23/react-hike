import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper"
import "./App.css";
import Auth from './Auth/Auth.js';
// possible error underneath on line 7 no Navbar or button?
import { Button } from 'react-bootstrap';

const auth = new Auth();
// auth.login();

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

    // const { isAuthenticated } = this.props.auth;
    
    return (
      <div>
         <Wrapper>
          <Navbar />
          <div className="container">
            <div className="row">
              <p>This is some text. Blah blah blah.</p>
          {/* <div><a href="tomlachance.com">Auth0 - React</a></div>
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
            } */}
              </div>
            </div>
            <Footer />
       </Wrapper>
      </div>
    );
  }
}
export default Front;

