import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './Navhome.css';

const Navhome = ()=>{
    return(
    <div >
         <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
         <h3 className = "head"> <img src ={logo} alt="logo" width="48px" height="48px"></img>Employee System</h3>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li  className="nav-item">
            <Link className="nav-link navcent" to="/new">Add New Employee</Link>
          </li>         
          <li  className="nav-item">
                <Link className="nav-link navcent" to="/signup">SignUp</Link>
          </li>
          <li  className="nav-item">
                <Link className="nav-link navcent" to="/login">Login</Link>
          </li>
         </ul>
       </div> 
       </nav>   
   </div>)
}

export default Navhome;

 