import { useState } from 'react'
import { Link} from 'react-router-dom'


const SignIn = () => {

  const [register,setRegister] = useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange =(e)=>{
    setRegister((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    handleGoogleSignIn();
    console.log(register)
  }

 

  return (
    <div className='login-outter'>
      <section className='login-main'>
        <img src="/images/logo.png" alt="logo" width="50px" height="50px" />
        <h1>Welcome to Logo</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder='Name' name='name' id='name' value={register.name} onChange={handleChange} />
          </div>
          <div className='form-div'>
          <label htmlFor="email">Email:</label>
          <input name='email' id="email" type="email" value={register.email} placeholder="Email" onChange={handleChange}/>
          </div>

          <div className='form-div'>
          <label htmlFor="password" id='password'>Password:</label>
          <input name='password' type="password" value={register.password} placeholder='Password' onChange={handleChange} />
          </div>

          <button>Sign in</button>

        </form>

        <p>Already have an account ? <Link to="/login">Login</Link></p>

        
        
      </section>
    </div>
  )
}

export default SignIn