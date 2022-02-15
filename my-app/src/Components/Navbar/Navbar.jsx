import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className='firstNav'>
          <li>Home</li>
          <li>Our products</li>
        </div>
        <div className='secondNav'>
          <li>Cart</li>
          <li>Guest</li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar