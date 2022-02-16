import React from "react";
import Home from "./Components/Homepage/Home";
import Login from "./Components/Loginpage/Login";
import './app.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/login' element={<Login />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
