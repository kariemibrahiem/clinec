import React from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui"
import "./error.css"
import p2 from "./imgs/not-found.png"
const Error = () =>{
    return(
        <div className="error_con">
            <li>
            <h1> NOT FOUND </h1>
            <img src={p2}/>
            </li>
        </div>
    );
}
export default Error;