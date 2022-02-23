import React, { useEffect, useState } from 'react'
import Navbar from '../Homepage/Navbar/Navbar'
import './productInfo.scss'
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'


const ProductInfo = (props) => {
  const location = useLocation();
  const product = location.state.product
  const [comments, setComments] = useState([])
  useEffect(() => {
    fetch(`http://192.168.1.113:9000/comment`, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json().then(data => {
      if (data.length){
        setComments(data)
      }
    }))
  }, [])

  return (
    <>
      <Navbar cartNumber={props.cartNumber} setCartNumber={props.setCartNumber} />
      <div className='productInfo'>

        <div className='product'>
          <h1>{product.productName}</h1>
          <h2>Current price: {product.productPrice}</h2>
          <img src={require(`../Homepage/ProductShowcase/images/${product.productImage}`)} alt="" />
          <h4>There is curently {product.inStock} of this product in invetory</h4>
        </div>
      </div>
      <div className='comments'>
        <div className='inputButton'>
          <input type="text" />
          <button>Insert comment</button>
        </div>
        <div className='commentPanel'>
          <h3>Comments about {product.productName} product:</h3>
          <div className='generatedComments'>
              {comments.map(comment => {
                return (<div key={uuidv4()}>
                <h2>User: {comment.user}</h2>
                <p>{comment.comment}</p>
                </div>)
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo