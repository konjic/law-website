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
      
      {/* <h3 className='logo'>Logo</h3> */}
      <img src="https://images.squarespace-cdn.com/content/v1/602334ccc83cc72486df6be3/1613162047924-M4ZJZ3N7HCMH4HXSUJ68/TMLF-0101+Brand+Identity_LOGO-black.png" alt="" className='logo' width="2" height="90"/>

      <ul className= {Mobile? "nav-links-mobile" : 'nav-links'} onClick={()=>setMobile(false)}>
        <Link to='/'><li>Home</li></Link>
        <Link to='/practice'><li>Practice</li></Link>
        <Link to='/why-choose-us'><li>Why choose us</li></Link>
        <Link to='/lawyers'><li>Lawyers</li></Link>
        <Link to='/reviews'><li>Reviews</li></Link>
      </ul>

      <button className='navbarButton'>+1 999 999 999</button>
      <button className='navbarButton-right'>Contact Us</button>
      
      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
      <FaBars/>
        
      </button>

    </nav>
  )
}

export default Navbar