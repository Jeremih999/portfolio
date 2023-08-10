import React, {useState} from "react";
import { GoThreeBars } from "react-icons/go"
import { FaTimes } from "react-icons/fa"

const NavBar = ()=>{

    const [nav, setNav] = useState(false);

    function openNav() {
       setNav(true)
    }
 
    function closeNav() {
       setNav(false)
    }
    return(
        <nav>
            <div className="navbar-container">
                <ul>
                    <li>Jeremih Brown</li>
                    <li className={nav ? "nav-links active" : "nav-links"}>
                        <ul className="nav-links-ul">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </li>
                    <div className="navbar-action-btns">
                            {nav ? <li><FaTimes style={{"color" : "white"}} onClick={closeNav} /></li> : <li><GoThreeBars onClick={openNav} style={{"color" : "white"}} /></li>}
                     </div>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar