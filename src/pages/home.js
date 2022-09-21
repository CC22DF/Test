import React from "react";
import '../App.css';
import NavBarIn from "./NavBar";
import NavOut from "./NavOut"


const HomePage = () => {
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
        return <NavOut />
    } else {
        return (
            <div>
                <NavBarIn />
                <h1>Home</h1>
            </div>
        )
    }
}
export default HomePage;