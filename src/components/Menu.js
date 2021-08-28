import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const Menu = () => {
    return(
        
        <Navbar sticky="top" bg="light" variant="light">
        <Navbar.Brand href="./">
            <img
            src="https://seeklogo.com/images/D/dhaka-metropolitan-police-logo-C8D559AE4B-seeklogo.com.png"
            width="50"
            />{'  '}
            <b>BlockChain Based FIR System</b>
        </Navbar.Brand>
        <Nav className="ml-auto">
            
          <Nav.Link className="d-inline-block align-center" href="./">
            <Button variant="outline-info"><b>HOME</b></Button>
          </Nav.Link>
          <Nav.Link href="./form">
            <Button variant="outline-info"><b>SUBMIT A FIR</b></Button>
          </Nav.Link>
          
        </Nav>
      </Navbar>

    );
};

export default Menu;