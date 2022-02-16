import React from 'react'
import './home.scss'
import Navbar from './Navbar/Navbar'
import ProductShowcase from './ProductShowcase/ProductShowcase'

const Home = () => {
  return (
    <>
    <Navbar/>
    <ProductShowcase/>
    <div className='home'></div>
    </>
  )
}

export default Home