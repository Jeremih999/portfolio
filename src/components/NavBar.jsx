import React from "react";

const NavBar = ()=>{
    return(
        <nav>
            <div className="navbar-container">
                <ul>
                    <li>LOGO</li>
                    <li>
                        <ul>
                            <li>Home</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar