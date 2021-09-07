import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AiTwotoneHome } from 'react-icons/ai';
import {FaHotel} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navstyle = {
    backgroundColor:"grey",
    
};
const mystyle = {
    color:"white",
}

const NavFooter = () => {        
  return (
        
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button 
        className = "navbar-toggler"
        type="button"
        data-toggle = "collapse"
        data-target = "#navbarNav"
        >
            <span className = "navbar-toggler-icon"></span>
        </button>
    <div className="container-fluid ">
      <FaHotel style={{fontSize:"50px",color:"white",paddingRight:"15px"}}/>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-auto mb-2 mb-lg-0">
          <li className="nav-item" style={mystyle}>
            <NavLink activeClassName="activeRoute"
activeStyle={{ color: 'teal' }} className="nav-link "  to="/"><AiTwotoneHome/> Home</NavLink>
          </li>
          
          <li className="nav-item" style={mystyle}> 
            <NavLink activeClassName="activeRoute"
activeStyle={{ color: 'teal' }} className="nav-link" to="/rooms" >
                Rooms</NavLink>
          </li>
          <li className="nav-item" style={mystyle}>
            <NavLink activeClassName="activeRoute"
activeStyle={{ color: 'teal' }} className="nav-link" to="/about" >About us</NavLink>
          </li>
          <li className="nav-item" style={mystyle}>
            <NavLink activeClassName="activeRoute"
activeStyle={{ color: 'teal' }} className="nav-link " to="/contact" >Contact us</NavLink>
          </li>
          
        </ul>
        
      </div>
    </div>
</nav>

  );
    }
  

export default NavFooter;
