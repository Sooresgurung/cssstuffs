import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Switch, Route, Redirect } from 'react-router';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
const App=()=>
{
  return(
    <>
    <Navbar></Navbar>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Route exact path="/service" component={Service}></Route>
    <Redirect to='/'></Redirect>
    </Switch>
    </>
  )
}
export default App;