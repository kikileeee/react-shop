import React, {useState} from 'react'
import Navbar from '../Homepage/Navbar/Navbar'
import './cart.scss'
import CartCheckout from './CartCheckout/CartCheckout'
import CartShowcase from './CartShowcase/CartShowcase'

const Cart = (props) => {
  
  let items = JSON.parse(localStorage.getItem('cart')) || []
  const [totalPriceState, setTotalPriceState ] = useState(items)


  return (
    <div className='componentCart'>
      <Navbar cartNumber={props.cartNumber}/>
      <div className='container'>
      <CartShowcase setTotalPrice={setTotalPriceState} setCartNumber={props.setCartNumber}/>
      <CartCheckout totalPrice={totalPriceState}/>
      </div>
    </div>
  )
}

export default Cart