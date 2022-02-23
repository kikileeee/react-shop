import React, {useState, useEffect} from 'react'
import './navbar.scss'
import AddShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = (props) => {
  const [user, setUser] = useState('Guest')
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('userInfo')) !== null){
      setUser(JSON.parse(localStorage.getItem('userInfo')).username )
    }
    else{
  
    }
  }, [])

  
 
  return (
    <nav className='navBar'>
      <ul>
        <div className='firstNav'>
          <li><a href="/">Home</a></li>
          <li> <a href="/products">Our products</a></li>
        </div>
        <div className='secondNav'>
          <li><a className='numberCart' href="/cart"  data-after={props.cartNumber}><AddShoppingCartIcon/></a></li>
          <a href="login"><li>{user}</li></a>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar