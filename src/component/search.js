import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui"
import React from "react";

const Search = () =>{
    return(
        <>
        <form>
            <input type="text" placeholder="Search..." className="form-control" />
                <button className="btn"><FontAwesomeIcon  icon={faSearch}/></button>
        </form>
        </>
    );
}

export default Search;