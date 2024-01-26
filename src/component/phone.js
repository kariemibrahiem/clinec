import React from "react";
import Contact from "../pages/contact/contact";
import { faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui"

const Phone =(props) =>{
    return(
        <>
        <form>
            <input type="text" placeholder="your phone" className="form-control" />
                <button className="btn"><FontAwesomeIcon  icon={faPhone}/></button>
        </form>
        </>

    );
}
export default Phone;