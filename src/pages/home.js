import React from "react";
import doc from "../component/imgs/doctor.png";
import "./home.css"
import $ from "jquery";
import "jquery-ui-dist/jquery-ui"
import { Nav, Navbar } from "react-bootstrap";
import tr from "../component/imgs/triangle.png";
import tr2 from "../component/imgs/triangle2.png";
import tr3 from "../component/imgs/d1.png";
import "../component/navs/nav";
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Navs from "../component/navs/nav";
import Contact from "./contact/contact";
import Nav_sec from "../component/navs/nav";
import Footer from "./footer";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <header>
            <Nav_sec />
            <small>
                <pre>
                the buttons work * home , contact us , search & phone icons , read more *
                </pre>
            </small>
            <div className=" home">
                <div className="row div_con">
                    <div className="col-md-4 text_con">
                        <h6>We Provide All Health Care Solution</h6>
                        <h2>Protect Your Health And Take Care To Of Your Health</h2>
                        <Link to="/read" className="btn">read more</Link>
                    </div>
                    <div className="col-md-4">
                        <img className="doc" src={doc}/>
                    </div>
                    <div>
                        <img className="ic1" src={tr}/>
                        <img className="ic2" src={tr2}/>
                        <img className="ic3" src={tr3}/>
                    </div>
                </div>
            </div>
            <Footer />
        </header>
    );
}
export default Home;