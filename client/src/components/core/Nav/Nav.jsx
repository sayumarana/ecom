import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './nav.css';


const Nav = (props) => {
    return (
      
            <nav className="navbar navbar-expand-lg fixed-top">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-bar">
            <span className="navbar-toggler-icon">&#9776;</span>
          </button>
    
          <Link className="navbar-brand" to="/"><img alt="app logo" src="/images/logo.jpeg" className="img-fluid c-logo"/></Link>
          
          <div className="collapse navbar-collapse" id="navigation-bar">
            <ul className="navbar-nav ml-auto">
                <li><NavLink className="nav-item" to='/'>HOME</NavLink></li>
                <li><NavLink className="nav-item" to='/products'>PRODUCTS</NavLink></li>
                <li><NavLink className="nav-item" to='/contacts'>CONTACT US</NavLink></li>
            </ul>
        </div>
        </nav>
    )
}

export default Nav;