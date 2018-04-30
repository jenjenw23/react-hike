import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
        <div>
         <Wrapper>
          <Navbar />
          <div className="container text-center">
            <div className="row">
         <TrailList />
         </div>
            </div>
            <Footer />
       </Wrapper>
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
              <h5 className="mt-0 mb-1 name">  {item.name.toUpperCase()} </h5>
            </p> 
            <ul className="list-unstyled">
            <li className="media">
              <img className="mr-3" src={item.imgSmall} alt="Generic placeholder image"></img>
              <div className="media-body">
                <h6 className="mt-0 mb-1"><i class="fas fa-star"></i>  {item.summary} <br></br> </h6>
                <h6 className="mt-0 mb-1">LOCATION: {item.location} <br></br> </h6>
                <h6 className="mt-0 mb-1"> STAR RATING: {item.stars}  <br></br></h6>
                <h6 className="mt-0 mb-1">ASCENT: {item.ascent} <br></br> </h6>
                <h6 className="mt-0 mb-1"> DESCENT: {item.descent}  <br></br></h6>
                <h6><a href={item.url} target="_blank" >MORE INFO</a></h6>
           
              </div>
              </li>
              </ul>
          
          </span>
          
        ))}
        </div>
      );
    }
  }
}
export default App;

