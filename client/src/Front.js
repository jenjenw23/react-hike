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
  state = {
    zipcode: " ",
    lat: 0,
    long: 0
  };

  
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  zipcodeTranslate = event =>{
        event.preventDefault();
    // let zipcode=this.state.zipcode;
    let lat = 41.8839927;
    let long = -87.61970559999997;
    this.setState({
      lat: lat,
      long: long
    });
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  // handleFormSubmit = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();

  //   // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
  //   this.setState({

  //   });
  // };


  
  render() {

    // const { isAuthenticated } = this.props.auth;
    
    return (
      <div>
         <Wrapper>
          <Navbar />
          <div className="container">
            <div className="row">
              {/* <p>This is some text. Blah blah blah.</p> */}
                <form>
                  <label>Name:</label>
                    <input type="text" 
                    name="zipcode" 
                    value={this.state.zipcode}
                    onChange={this.handleInputChange} />
                  
                  <button onClick={this.zipcodeTranslate}>Submit</button>               
                   </form>


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

