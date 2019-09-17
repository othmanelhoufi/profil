import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavStyle.scss';


const NavBar = (props) => (


  <div className="navbar">
    <ul className="navlist">
      <li> <NavLink activeClassName="selected" to="/home">Home</NavLink> </li>
      <li> <NavLink activeClassName="selected" to="/experience">Experience</NavLink> </li>
      <li> <NavLink activeClassName="selected" to="/education">Education</NavLink> </li>
      <li> <NavLink activeClassName="selected" to="/skills">Skills</NavLink> </li>
      <li> <NavLink activeClassName="selected" to="/contact">Contact</NavLink> </li>
    </ul>
  </div>


);




export default NavBar;
