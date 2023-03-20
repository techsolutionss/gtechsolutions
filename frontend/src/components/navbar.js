import {Link} from "react-router-dom"
import "../static/navbar.css"
import { FaTimes,FaBars } from "react-icons/fa";
import { useState } from "react";
// import logo from "../assets/images/gtech-logo.jpg"

const Navbar = ()=>{

    const[closeMobile,setcloseMobile] = useState(true)
    const[showText,setshowText]= useState(false) 
    const closeNavigation =()=>{
        setcloseMobile(!closeMobile)
    }
    const showSignInText =()=>{
        setshowText(true)
    }
    const hideSignInText = ()=>{
        setshowText(false)
    }

    return(
        <div className="navbar">
            <h2 className="navbar-header">Gtech<span>solution</span></h2>
            <div className={`navbar-nav ${closeMobile ?"collapse":"" }`}>
                <ul>
                    <li className="navbar-list"><Link to="/" className="navbar-list-link">home</Link></li>
                    {/* <li className="navbar-list"><Link to="/services" className="navbar-list-link">services</Link></li> */}
                    <li className="navbar-list"><Link to="#" className="navbar-list-link">recent work</Link></li>
                    <li className="navbar-list"><Link to="#" className="navbar-list-link">blog</Link></li>
                    <li className="navbar-list"><Link to="/contact" className="navbar-list-link">contact</Link></li>
                    <li className="navbar-list"><Link to="#" className="navbar-list-link">about</Link></li>
                </ul>
                <div className="navbar-links">
                    <Link to="/signin" className="sign-in-link navbar-link"
                    onMouseOver={showSignInText}
                    onMouseOut={hideSignInText}
                    >
                    sign in 
                    <p className={`${showText ? "sign-in-link-text":"hide-text"}`}>sign in to access our services</p>
                    </Link>
                    <Link to="/signup" className="sign-up-link navbar-link">sign up</Link>
                </div>
            </div>
            <div className="navbar-icon">{closeMobile?<FaBars onClick={closeNavigation} />:<FaTimes onClick={closeNavigation} />}</div>
        </div>
    );
}
export default Navbar