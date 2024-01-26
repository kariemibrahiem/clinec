import React, { Fragment } from "react";
import Home from "../home";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLocation } from "@fortawesome/free-solid-svg-icons";
import "./contact.css";
import Nav_sec from "../../component/navs/nav";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Con from "../../component/contact_file";
const Contact = (props) =>{
    return(
        <Fragment >
            <Nav_sec />
            <div className="contact_sec">
                <h2 className="contact_logo">
                  .....<sup>{props.title} </sup> .....
                </h2>

        {/*the input group */}

                <Link className="links" to="/home"> 
                    <FontAwesomeIcon  icon={faHome}/>
                    <h2>home</h2>
                </Link>
                <div className="row">
                    {/* danger */}
                    <div className="col-md-6 col-sm-12">
                        {props.content}
                    </div>
                    {/* danger end */}
                    <div className="col-md-6 col-sm-12 sec">
                        <h2>Contact Us For Any Informations</h2>
                        <span className="location">
                        <FontAwesomeIcon className="icon" icon={faLocation} /><h3>location</h3>
                        </span>
                        <hr/>
                        <span className="emails">
                            <p>our email for contact</p>
                            <p>..........email@gamil.com</p>
                            <h3>follow us</h3>
                        </span>
                    </div>
                </div>
            

            </div>

        </Fragment>

    );
}
export default Contact ;