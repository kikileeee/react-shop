import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className='navBar'>
      <ul>
        <div className='firstNav'>
          <li>Home</li>
          <li>Our products</li>
        </div>
        <div className='secondNav'>
          <li>Cart</li>
          <a href="login"><li>Guest</li></a>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar