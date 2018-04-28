import React, { Component } from "react";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
        <div className="App-header">
          <Navbar />
        </div>
      <div className='ui unstackable items'>
         <TrailList />
      </div>
      </div>
    );
  }
}
class TrailList extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("https://www.hikingproject.com/data/get-trails?lat=41.8839927&lon=-87.61970559999997&maxDistance=100&key=200251996-70d1290115a9bb02abe242b4a58c7e3b")
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            items: response.trails
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items.map(item => (
            <span key={item.id}>
            <p>
              {item.name} 
            </p> 
            <p>
               {item.summary} 
            </p>
            <p>
              {item.location} 
            </p>  
            <p>
            {item.ascent}' Ascent
            </p>
            <p>
            {item.descent}' Descent'
            </p>
            <hr></hr>
          </span>
        ))}
        </div>
      );
    }
  }
}
export default App;
