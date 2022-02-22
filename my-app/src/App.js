import React, {useState} from "react";
import Home from "./Components/Homepage/Home";
import Login from "./Components/Loginpage/Login";
import Signup from "./Components/Loginpage/Signup"
import './app.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from "./Components/Cartpage/Cart";

function App() {
  let storage = JSON.parse(localStorage.getItem('cart')) || []
  let total = 0
  let cart = storage.map(e => {
    total +=  e.quantity
  })
  const [cartNumber, setCartNumber] = useState(`${total}`)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home cartNumber={cartNumber} setCartNumber={setCartNumber}/>}>
        </Route>
        <Route path='/login' element={<Login />}>
        </Route>
        <Route path='/signup' element={<Signup />}>
        </Route>
        <Route path='/cart' element={<Cart cartNumber={cartNumber} setCartNumber={setCartNumber}/>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
