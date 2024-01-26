import React, { Fragment } from "react";
import logo from "../component/imgs/download.png";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faSearch , brands } from '@fortawesome/free-solid-svg-icons'
import tr from "../component/imgs/blus.png";
import tr2 from "../component/imgs/circule2.png";
import tr3 from "../component/imgs/plus2.png";
import c1 from "../component/imgs/insta.png";
import c2 from "../component/imgs/facebook.png";
import c3 from "../component/imgs/tweter.png";
import c4 from "../component/imgs/linked.png";


 const Footer  = () => {
    return (
        <Fragment>
                <div  className="row  foot_con">
                        <div className="col-sm-6 col-lg-3">
                            <img src={logo}/>
                            <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et. </p>
                            <span className="flex"><FontAwesomeIcon className='icons' icon={faPhone} /> <span className="non_flex"> <h3> <p><sup>contact us</sup> </p> +202829707</h3>  </span> </span>                    
                        </div>
                        
                        <div className="col-sm-6 col-lg-3">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">booking</a></li>
                                <li><a href="#">faq's</a></li>
                                <li><a href="#">blogs</a></li>
                                <li><a href="#">out team</a></li>
                            </ul>
                                            
                        </div>
                        
                        <div className="col-sm-6 col-lg-3">
                            <h2>Our Service</h2>
                            <ul>
                                <li><a href="#">Dental Care</a></li>
                                <li><a href="#">Cardiac Clinic</a></li>
                                <li><a href="#">Massege Therapy</a></li>
                                <li><a href="#">Cardiology</a></li>
                                <li><a href="#">Precise Diagnosis</a></li>
                                <li><a href="#">Abmbulance Services</a></li>
                            </ul>                    </div>
                        
                        <div className="col-sm-6 col-lg-3">
                        <h2>Subscribe</h2>
                        <input type="email" className="form-control w-100" placeholder="Email Address"/>
                        <button className="btn btn-outline-danger w-100 ">button</button>
                        <div className="connect">
                            <img src={c1} className="connected_img"/>
                            <img src={c2} className="connected_img"/>
                            <img src={c3} className="connected_img"/>
                            <img src={c4} className="connected_img"/>
                        </div>
                        </div>
                        
                        <div className="imgss">
                            <img className="i1" src={tr}/>
                            <img className="i2" src={tr2}/>
                            <img className="i3" src={tr3}/>
                        </div>
                        <hr/>
                </div>
                <div className="foot_connect row">
                    <div className="col-sm-6">
                        <ul>
                            <li><a href="#">Dental Care</a></li>
                            <li><a href="#">Cardiac Clinic</a></li>
                            <li><a href="#">Massege Therapy</a></li>
                            <li><a href="#">Cardiology</a></li>
                            <li><a href="#">Precise Diagnosis</a></li>
                            <li><a href="#">Abmbulance Services</a></li>
                        </ul>
                        <hr/>
                    </div>
                    
                    <div className="col-sm-6">
                        <ul>
                            <li><a href="#">Dental Care</a></li>
                            <li><a href="#">Cardiac Clinic</a></li>
                            <li><a href="#">Massege Therapy</a></li>
                            <li><a href="#">Cardiology</a></li>
                            <li><a href="#">Precise Diagnosis</a></li>
                            <li><a href="#">Abmbulance Services</a></li>
                        </ul>
                        <hr/>
                    </div>
                
                </div>
        </Fragment>
    );
 }

 export default Footer;