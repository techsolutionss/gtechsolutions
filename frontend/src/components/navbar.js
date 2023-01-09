import {Link} from "react-router-dom"
import "../static/navbar.css"
import { FaTimes,FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = ()=>{

    const[closeMobile,setcloseMobile] = useState(true)

    const closeNavigation =()=>{
        setcloseMobile(!closeMobile)
    }
    

    return(
        <div className="navbar">
            <h2 className="navbar-header">Tech<span>solution</span></h2>
            <div className={`navbar-nav ${closeMobile ?"collapse":"" }`}>
                <ul>
                    <li className="navbar-list"><Link to="/" className="navbar-list-link">home</Link></li>
                    <li className="navbar-list"><Link to="/services" className="navbar-list-link">services</Link></li>
                    <li className="navbar-list"><Link to="#" className="navbar-list-link">recent work</Link></li>
                    <li className="navbar-list"><Link to="/contact" className="navbar-list-link">contact</Link></li>
                    <li className="navbar-list"><Link to="/about" className="navbar-list-link">about</Link></li>
                </ul>
            </div>
            <div className="navbar-icon">{closeMobile?<FaBars onClick={closeNavigation} />:<FaTimes onClick={closeNavigation} />}</div>
        </div>
    );
}
export default Navbar