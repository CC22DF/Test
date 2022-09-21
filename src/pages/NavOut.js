import React from "react";
import { Link } from "react-router-dom";

import '../App.css';

function NavOut() {
    const logout = () => {
        window.localStorage.clear();
    }
    return (
        <nav className="nav">
            <div>
                <p class="logo">LOGO</p>
            </div>
            <div class="d-bt">
                <Link to="/">
                    Home</Link>
                <Link to="/post">
                    Posts</Link>
                <Link to="/">
                    <button onClick={logout} class="bt-s" >Logout</button>
                </Link>
            </div>
        </nav>
    )
}
export default NavOut;
