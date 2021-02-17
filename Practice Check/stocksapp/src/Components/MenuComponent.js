import React, { Component } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink,ListGroup} from 'reactstrap'
import { Asynchronous } from './MenuComponents/Asynchronous'
import { LoggedIn } from './MenuComponents/LoggedIn'
import {Login} from './Login'
import {Home} from './Home'
import {Companies} from './Companies'
import {WatchList} from './WatchList'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  export var isLogin;
  const MenuComponent=(props)=>{
    let nav;
    isLogin=props.loggedin;
     if(isLogin){
        nav=<LoggedIn/>;
    }
    else
    {
        nav=<Asynchronous/>;
    }
    return(
        <div>
            <Router>
            <Asynchronous/>
            <LoggedIn/>
            <Container>
                <Route path="/"component={Companies} exact></Route>
                <Route path="/login"component={Login} exact></Route>
                <Route path="/watchlist" component={WatchList}></Route>
            </Container>
            </Router>
        </div>
    );
}

export default MenuComponent;