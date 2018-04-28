import React, { Component } from "react";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import "./App.css";

class Front extends Component {
  render() {
    return (
        <div className="App">
        <div className="App-header">
          <Navbar />
        </div>
      <div className='ui unstackable items'>
      </div>
      </div>
    );
  }
}
export default Front;

