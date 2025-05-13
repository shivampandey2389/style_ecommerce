import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [login,setLogin] = useState({
    email:"",
    password:""
  })
  const handleChange =(e)=>{
    setLogin((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(login);
    if(login.email === "admin@email.com" && login.password ==="123456789"){
      navigate('/')
    }else{
      alert('Invalid credential')
    }
  }
  return (
    <div className='login-outter'>
      <section className='login-main'>
        <img src="/images/logo.png" alt="logo" width="50px" height="50px" />
        <h1>Welcome to Logo</h1>

        <form onSubmit={handleSubmit}>
          <div className='form-div'>
          <label htmlFor="email">Email:</label>
          <input name='email' id="email" type="email" value={login.email} placeholder="Email" onChange={handleChange}/>
          </div>

          <div className='form-div'>
          <label htmlFor="password" id='password'>Password:</label>
          <input name='password' type="password" value={login.password} placeholder='Password' onChange={handleChange} />
          </div>

          <button>Login</button>

        </form>

        <p>Create new account ? <Link to="/register">Register</Link></p>

        <div className='hr-line'>
          <div></div>
          <span>Or</span>
          <div></div>
        </div>
        <div className='google-auth'>
            <button>
              <img src="/images/google.png" alt="google" width={20} />
              <p>Continue with Google</p>
            </button>
        </div>
      </section>
    </div>
  )
}

export default Login