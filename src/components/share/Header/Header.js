import userEvent from '@testing-library/user-event';
import React from 'react';
import { Container, Nav as Link, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../hook/UseAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
const Header = () => {
    const { user, logOut } = UseAuth()
    return (
        <div className="p-2 bg-dark">
            <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home" className=" fs-2">Travelling Bangladesh</Navbar.Brand>
                    <Nav className="mx-auto text-light">
                        <Nav.Link as={HashLink} to="/home#home" className=" text-light ">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#package" className=" text-light">package</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#heritage" className=" text-light ">Heritage</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#why" className=" text-light ">Why Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/booking" className=" text-light ">My Booking</Nav.Link>
                        <Nav.Link as={HashLink} to="/add" className=" text-light ">Add a package</Nav.Link>
                        <Nav.Link as={HashLink} to="/manage" className=" text-light ">Manage Order</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {user?.email ?
                            <button className="bg-light text-dark" onClick={logOut}>Log Out</button> :
                            <Nav.Link as={HashLink} to="/login" className=" text-light fs-5">Log in</Nav.Link>
                        }
                        <Navbar.Text>
                            <a as={HashLink} to="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;