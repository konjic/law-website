import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Link,

} from "react-router-dom";
import './navbar.css'
import {FaBars} from 'react-icons/fa'


function Navbar() {

  const [Mobile, setMobile] = useState(false)

  return (
    <nav className="navbar">
      
      <h3 className='logo'>Logo</h3>

      <ul className= {Mobile? "nav-links-mobile" : 'nav-links'} onClick={()=>setMobile(false)}>
        <Link to='/'><li>Home</li></Link>
        <Link to='/practice'><li>Practice</li></Link>
        <Link to='/why-choose-us'><li>Why choose us</li></Link>
        <Link to='/lawyers'><li>Lawyers</li></Link>
        <Link to='/reviews'><li>Reviews</li></Link>
      </ul>

      <button>+1 999 999 999</button>
      <button>Contact Us</button>
      
      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
      <FaBars/>
        
      </button>

    </nav>
  )
}

export default Navbar