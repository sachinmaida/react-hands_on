import React, { Component } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink,ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'


export class Asynchronous extends Component{
    render(){
        return(
            <div>
                <Navbar >
                <NavbarBrand href='#'>mStock App</NavbarBrand>
                <Nav className='mr-auto' navbar-nav>
                    <NavItem>
                        <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Companies</Link>
                    </NavItem>

                    <NavItem>
                        <Link className="list-group-item list-group-item-action" tag="a" to="login" action>Login</Link>
                    </NavItem>
                </Nav>
            </Navbar>
            </div>
        );
    }
}