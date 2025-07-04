import React from 'react'
import PropTypes from 'prop-types';
// import { a } from 'react-router-dom';
export default function Navbar(props) {
 
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className={`nav-link mx-2 text-${props.mode==="light"?"black":"white"}`} aria-current="page" href="#">
              Home 
             </a>
          </li>
          
          
         
        </ul>
        <>
  <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
 
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
      onChange={props.togglemode}
    />
     <label className="form-check-label "htmlFor="flexSwitchCheckDefault">
     Dark Mode
    </label>
   
  </div>


  
</>

      </div>
    </div>
  </nav>
  
  )
}


Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string
};