import React from 'react'
import './home.scss'
import Navbar from './Navbar/Navbar'
import ProductShowcase from './ProductShowcase/ProductShowcase'

const Home = (props) => {
  
  return (
    <>
    <Navbar cartNumber={props.cartNumber} setCartNumber={props.setCartNumber}/>
    <ProductShowcase name='Most popular products RIGHT NOW' fetch='popular' setCartNumber={props.setCartNumber}/>
    <ProductShowcase name='Products on sale RIGHT NOW' fetch='lowToHigh' setCartNumber={props.setCartNumber}/>
    <ProductShowcase name='Feeling lucky?' fetch='lucky' setCartNumber={props.setCartNumber}/>
    <div className='home'></div>
    </>
  )
}

export default Home