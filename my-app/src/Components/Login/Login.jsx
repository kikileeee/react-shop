import React from 'react'
import './login.scss'

const Login = () => {
  return (
    <form className='login' >
        <label htmlFor="name">Username</label>
        <input name='name' type="text" />
        <label name='password'>Password</label>
        <input type="password" />
        <button>Login</button>
        <p>Dont have an account? Sign in</p>
    </form>
  )
}

export default Login