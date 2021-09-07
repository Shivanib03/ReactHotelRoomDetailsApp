import React from "react";


import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import { AiTwotoneHome } from 'react-icons/ai';
import {FaHotel} from "react-icons/fa";

function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <FaHotel style={{fontSize:"50px",color:"white",paddingRight:"15px", paddingLeft:"5px"}}/>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                activeStyle={{ textShadow: "3px" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rooms">
                Rooms
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      
    </>
  );
}
Nav.defaultProps = {
  name: "Prime Emovies",
  tag: 2,
};
Nav.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.number,
};

export default Nav;
