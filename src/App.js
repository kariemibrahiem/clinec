import React from "react";
import "./App.css";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui"
import { Nav } from "react-bootstrap";
import Navs from "./component/navs/nav";
import Home from "./pages/home";
import { BrowserRouter, HashRouter, Route, RouterProvider, Routes, createHashRouter } from "react-router-dom";
import Footer from "./pages/footer";
import Contact from "./pages/contact/contact";
import Nav_sec from "./component/navs/nav";
import Search from "./component/search";
import Con from "./component/contact_file";
import Phone from "./component/phone";
import Error from "./component/erroe";
import Read from "./component/read";
const App = () =>{
    return(
        <div>
           <HashRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact title="contact us" content={<Con/>}/>} />
                <Route path="/phone" element={<Contact title="phone numbers" content={<Phone />}/>} />
                <Route path="/search" element={<Contact title="search"  content={<Search/>}/>} />
                <Route path="/read" element={<Contact title="about us"  content={<Read />}/>} />
                <Route path="*" element={<Home/>} />
            </Routes>
           </HashRouter>
           
        </div>
    );
}
export default App;