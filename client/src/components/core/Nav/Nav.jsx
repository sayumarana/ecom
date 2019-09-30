import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './nav.css';


const Nav = (props) => {
    return (
      
            <nav className="navbar navbar-expand-lg fixed-top">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-bar">
            <span className="navbar-toggler-icon">&#9776;</span>
          </button>
    
          <Link className="navbar-brand" to="/"><img alt="app logo" src="/images/logo.png" className="img-fluid"/></Link>
          
          <div className="collapse navbar-collapse" id="navigation-bar">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"><NavLink to='/'>HOME</NavLink></li>
                <li className="nav-item"><NavLink to='/products'>PRODUCTS</NavLink></li>
                <li className="nav-item"><NavLink to='/contacts'>CONTACT US</NavLink></li>
            </ul>
        </div>
        </nav>
    )
}

export default Nav;