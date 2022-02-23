import React, { useState, useEffect } from 'react'
import Navbar from '../Homepage/Navbar/Navbar'
import './products.scss'
import { v4 as uuidv4 } from 'uuid'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCartSharp';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'

const Products = (props) => {
    const [Products, SetProducts] = useState([]);
    const [Search, setSearch] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://192.168.1.113:9000/popular', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json().then(data => {
            SetProducts(data)
        }))
    }, [])
    function addItem(x) {
        let a = []
        let pushNewData = true
        a = JSON.parse(localStorage.getItem('cart')) || [];

        let total = 1
        let cart = a.map(e => {
            total += e.quantity
        })

        a.find(item => {
            if (item.productid == x.productid) {
                item.quantity += 1
                pushNewData = false
                props.setCartNumber(`${total}`)
                localStorage.setItem('cart', JSON.stringify(a))
            }
        })
        if (pushNewData) {
            x.quantity = 1
            a.push(x);
            props.setCartNumber(`${total}`)
            localStorage.setItem('cart', JSON.stringify(a))
        }
    }
    return (
        <>
            <Navbar cartNumber={props.cartNumber} setCartNumber={props.setCartNumber} />
            <div>
                <div className='products'>
                    <div className='search'>
                        <label htmlFor=""> Search
                            <SearchIcon />
                            <input type="text" onChange={e => { setSearch(e.target.value) }} />
                        </label>
                        
                    <h1>All Products</h1>
                    </div>

                    <div className='productsPanel'>
                        {Products.filter(e => {
                            if (Search == '') {
                                return e
                            } else if (e.productName.toLowerCase().includes(Search.toLowerCase())) {
                                return e
                            }
                        }).map(product => {
                            return <div className='card' key={uuidv4()}>
                                <h2>{product.productName}</h2>
                                <h3>Current price: {product.productPrice}$</h3>
                                <h4 onClick={() => {navigate(`/productInfo/`,{state:{product:product}})}}>Click for more info</h4>
                                <img src={require(`../Homepage/ProductShowcase/images/${product.productImage}`)} alt="" />
                                <div className='blackOverlay'>
                                    <button onClick={() => { addItem(product) }}><AddShoppingCartIcon /></button>

                                </div>
                            </div>
                        })}

                    </div>
                </div >
            </div >
        </>
    )
}

export default Products