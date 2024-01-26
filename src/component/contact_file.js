import React from "react";
import "../pages/contact/contact.css"
const Con = () =>{
    return(
        <>
        <form className="form-group">
            <input  type="text" placeholder="your name" className="form-control"/>
            <input  type="email" placeholder="your email" className="form-control"/>
            <input  type="number" placeholder="phone number" className="form-control"/>
            <input  list="do_now" placeholder="selecty department" className="form-control"/>
            <datalist id="do_now">
                <option value="stomash"></option>
                <option value="teeth"></option>
                <option value="ache"></option>
            </datalist>
            <input  type="text" placeholder="message" className="form-control"/>
            <button className="btn btn-danger"> submit </button>
        </form>
        </>
    );
}
export default Con;