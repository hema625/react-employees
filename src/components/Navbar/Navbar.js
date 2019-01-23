import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from './logotransparent.png'

const Navbar = ()=>{
    return(
    <div className="empNavbar">
         <nav className="navbar navbar-expand-md navbar-dark bg-info">
         <Link className="navbar-brand" to="/">
         <img src ={logo} alt="logo" width="32px" height="32px"></img>
         </Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li  className="nav-item">
            <Link className="nav-link navcustomitem" to="/display">View Employees</Link>
          </li>         
          <li  className="nav-item">
                <Link className="nav-link navcustomitem" to="/new">Add New Employee</Link>
          </li>
         </ul>
       </div> 
       </nav>   
   </div>)
}

export default Navbar;

 