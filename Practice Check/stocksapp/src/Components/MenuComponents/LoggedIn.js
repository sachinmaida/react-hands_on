import React, { Component } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink,ListGroup, ListGroupItem} from 'reactstrap'
import Link from 'react-router-dom'


export class LoggedIn extends Component{
    render(){
        return(
            <div>
                <Navbar color='light'>
                <NavbarBrand href='#'>mStock App</NavbarBrand>
                <Nav className='mr-auto' navbar>
                    <ListGroup>
                        <ListGroupItem className="list-group-item list-group-item-action" active tag="a" href="/" action>Companies</ListGroupItem>
                        <ListGroupItem className="list-group-item list-group-item-action" tag="a" href="watchList" action>WatchList</ListGroupItem>
                        <ListGroupItem  className="list-group-item list-group-item-action" tag="a" href="ComparePerformance" action>Compare Performance</ListGroupItem>
                        <ListGroupItem className="list-group-item list-group-item-action" tag="a" href="Logout" action>Logout</ListGroupItem>
                    </ListGroup>
                </Nav>
            </Navbar>
            </div>
        );
    }
}