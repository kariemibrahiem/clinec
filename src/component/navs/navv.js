import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import logo from "../imgs/download.png";
import "./nav.css";
import s_icon from "../imgs/search (1).png";
import call from "../imgs/telephone-call.png";
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const NAv = () => {
    return (
      <Navbar expand="md" className="nav_sec">
          <Container>
            <Navbar.Brand href="#home" className='brand'>
              <img className='imgs' src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                {/* the dropdown */}
                <NavDropdown title="pages"  id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">about us</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">our team</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">FAQ'S</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">booking</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">error 404</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">login/Register</NavDropdown.Item>
                </NavDropdown>
                {/* the dropdown */}
                <NavDropdown title="services"  id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">service</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">service Details</NavDropdown.Item>
                </NavDropdown>
                {/* the dropdown */}
                <NavDropdown title="blog"  id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">blogs</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">blogs Details</NavDropdown.Item>
                </NavDropdown>
                {/* hte last link */}
                <Nav.Link href="#home" className='search_div'>search 
                <FontAwesomeIcon className='icons' icon={faSearch} />
                </Nav.Link>
                <Nav.Link href="#home" className='more'>
                 <FontAwesomeIcon className='icons' icon={faPhone} />
                </Nav.Link>
                <Nav.Link href="#home" className='more'>
                  <Link>
                    <button className="cssbuttons-io-button">
                      contact
                      <div className="icon">
                        <svg
                          height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"  fill="currentColor" ></path>
                        </svg>
                      </div>
                    </button>
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  }
  export default NAv;