import React, { useState, useEffect } from 'react'
import './productShowcase.scss'
import shoes from './shoes.png'

const ProductShowcase = () => {
    const [Products, SetProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json().then(data => {
            SetProducts(data)
            console.log(Products)
        }))
    }, [])

    return (
        <div className='productShowcase'>
            <div className='slides'>
                <div className='productCard'>
                    {Products.map(product => (
                        <div>
                            <h1>{product.productName}</h1>
                            <h2>{product.productPrice}$</h2>
                            <img src={shoes} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductShowcase