import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase/firebase';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useAuthContext } from '../context/authContext';

const Login = () => {
  const navigate = useNavigate();
  const { afterLogin, islogin, setAccount,setIsAuthenticated } = useAuthContext();
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAccount(user);
        setIsAuthenticated(true);
        navigate('/home');
        console.log("User is still logged in:", user);
      }
    });
    return () => unsubscribe();
  }, [navigate, setAccount, islogin]);

  const handleChange = (e) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        localStorage.setItem("accessToken", token);
        localStorage.setItem("user", JSON.stringify(user));

        afterLogin(user);
        console.log(user);
        
      })
      .catch((error) => {
        console.error("Error during Google Sign-In:", error);
      });
  };

  return (
    <div className='login-outter'>
      <section className='login-main'>
        <img src="/images/logo.png" alt="logo" width="50px" height="50px" />
        <h1>Welcome to Logo</h1>

        <form onSubmit={handleSubmit}>
          <div className='form-div'>
            <label htmlFor="email">Email:</label>
            <input name='email' id="email" type="email" value={login.email} placeholder="Email" onChange={handleChange} />
          </div>

          <div className='form-div'>
            <label htmlFor="password" id='password'>Password:</label>
            <input name='password' type="password" value={login.password} placeholder='Password' onChange={handleChange} />
          </div>

          <button>Login</button>
        </form>

        <p>Create new account? <Link to="/register">Register</Link></p>

        <div className='hr-line'>
          <div></div>
          <span>Or</span>
          <div></div>
        </div>
        <div className='google-auth'>
          <button onClick={handleGoogleSignIn}>
            <img src="/images/google.png" alt="google" width={20} />
            <p>Continue with Google</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;