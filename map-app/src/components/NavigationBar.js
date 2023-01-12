import React from "react";
import { bvt } from "../assets";
import "../style/NavigationBar.css";

function NavigationBar() {

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-left-section">
                <img src={bvt} alt="logo-app" className="navbar-bvt-image"/>
                </div>
                {/* <div className="navbar-right-section">
                    Navbar Right Section
                </div> */}
            </div>
        </div>
    )
}

export default NavigationBar;