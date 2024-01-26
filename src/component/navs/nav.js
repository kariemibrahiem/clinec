import React, { Fragment } from "react";
import { Container, Fade, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../imgs/download.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s_icon from "../imgs/search (1).png";
import call from "../imgs/telephone-call.png";
import { faHome, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, Route } from "react-router-dom";
import "./nav.css";
import Contact from "../../pages/contact/contact";
//font awesome

const Nav_sec = () => {
  return(
 <Navbar expand="md" className="nav_sec">
  <Container className="nav_container m-10">
    <Navbar.Brand href="#home" className='brand'>
      <img className='imgs' src={logo} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className="links" to="/home">
          <FontAwesomeIcon icon={faHome} />
          home</Link>
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
        <Link className="links m-1" to="/search" >
          <FontAwesomeIcon icon={faSearch}/>
        </Link>
        <Link className="links m-1" to="/phone" >
          <li>
          <FontAwesomeIcon icon={faPhone} />
          </li>
        </Link>
        <Link to="/contact">
          <button   className="cssbuttons-io-button">
              contact
              <div className="icon">
                <svg
                  height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"  fill="currentColor" ></path>
                </svg>
              </div>
          </button>
          <small>the only work</small>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};
export default Nav_sec;