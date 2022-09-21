import React from "react";
import { Link } from "react-router-dom";

import '../App.css';

function NavBarIn() {
    return (
        <nav className="nav">
            <div>
                <p class="logo">LOGO</p>
            </div>
            <div class="d-bt">
                <Link to="/">
                    <button class="bt-s">Home</button></Link>
                <Link to="/login">
                    <button class="bt-s" >login</button>
                </Link>
            </div>
        </nav>
    )
}
export default NavBarIn;
