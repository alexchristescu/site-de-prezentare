import React,{Component} from 'react'
import "./Header.css";
import StickyHeader from 'react-sticky-header';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faWhatsapp
  } from "@fortawesome/free-brands-svg-icons";


export default class Header extends Component {

    



    render(){ 
       

        return(
            
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top"  >
            <Navbar.Brand href="#home">
            <img
        src= {logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-center" >
              <Nav >
                <Nav.Link  href="#features">Features</Nav.Link>
                <Nav.Link   href="#pricing">Pricing</Nav.Link>
                <NavDropdown  title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
              </Navbar.Collapse>
              <Nav className="d-none d-md-flex" >
                <Nav.Link href="#deets"><FontAwesomeIcon icon= {faFacebook}  /></Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                <FontAwesomeIcon icon= {faInstagram}  />
                
                </Nav.Link>
                <Nav.Link href="#deets"><FontAwesomeIcon icon= {faWhatsapp}  /></Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                <FontAwesomeIcon icon= {faYoutube}  />
                
                </Nav.Link>
              </Nav>
              
            
          </Navbar>
          

         
          
      
          
        )
    }

}