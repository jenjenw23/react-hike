import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import App from '../src/App';

render((
  <BrowserRouter>
    <div> 
        <Route exact path="/"  /> 
        <Route exact path="/trails" component={App} /> 
    </div>
  </BrowserRouter>
), document.getElementById('root'));


