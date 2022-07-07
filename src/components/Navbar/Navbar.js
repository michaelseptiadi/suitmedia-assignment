import React from "react"
import "./style.css"

function Navbar() {
    return (
        <div classNameName="navbar">
            <div className="container">
                <a className="navbar-brand" href="#about">
                    Company
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item navbar-nav dropdown">
                        <a className="dropbtn" href="#about">
                            ABOUT
                        </a>
                        <div className="dropdown-content">
                            <div className="nav-dropdown">
                                <a className="nav-item" href="#History">
                                    HISTORY
                                </a>
                            </div>
                            <div className="nav-dropdown">
                                <a className="nav-item" href="#Vision">
                                    VISION MISSION
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#History">
                            OUR WORK
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#value">
                            OUR TEAM
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
