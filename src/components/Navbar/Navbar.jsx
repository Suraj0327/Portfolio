import React from "react";
import "./Navbar.css"
const Navabar=()=>{
    return(
        <div class="n-wrapper">
            <div className="n-left">
            <div className="n-name">Suraj </div>
            <span>toggle</span>
            </div>
           
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <li>Home</li>
                        <li>Skills & Technology</li>
                        <li>Project</li>
                        <li>About me</li>
                        <li>Youtube Channel</li>
                       
                    </ul>
                </div>
                <button className="button">
                    Contact me
                </button>
            </div>
        </div>
    )
}
export default Navabar;