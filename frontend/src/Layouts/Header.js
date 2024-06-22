import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
 
  return (
    <>  

  <header id="header" className="fixed-top header-scrolled">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><Link to="/">Arsha</Link></h1>



      <nav id="navbar" className="navbar">
        <ul>
          <li><NavLink className="nav-link " activeClassName="active" to="/">Home</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="active"  to="about-us">About</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="active" to="services">Services</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="active" to="portfolio">Portfolio</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="active" to="our-team">Our Team</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="active" to="faq">FAQ</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="active" to="contact-us">Contact</NavLink></li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
    
  </header>
 
    </>
  )
}

export default Header