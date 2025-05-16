import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import { useAuthContext } from '../context/authContext';

const Header = () => {
  const {account} = useAuthContext();
  const [scroll,setScroll] = useState(false);
  useEffect(()=>{
    const handleScroll = () =>{
      let isScroll = window.screenY > 10;
      setScroll(true);
    }
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  },[])
  return (
    <>
    <header>
      <div className={scroll ? 'scroll-nav':''}>
        <div className="nav-flex-menu">
            <button className="menu-btn">
              <div className="menu menu-1"/>
              <div className="menu menu-2"/>
              <div className="menu menu-3"/>
            </button>
            <nav>
            <ul className="nav-flex">
              <li>
                <NavLink to="/home">
                  Home
                </NavLink>  
              </li>
              <li>
                <NavLink to="/collection">
                  Collections 
                </NavLink>
              </li>
              <li>
                <NavLink to="/new">
                  New
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <img src="/images/logo.png" alt="" />
        </div>

      <div className="fav-cart-acc">
           <button>
            <img src="/images/fav.png" alt="" />
           </button>
           <div className="cart-icon">
            <button className="cart-btn">
              Cart
            </button>
            <img src="/images/cart.png" alt="" />
            </div>
          <div className="acc-logo-outter">
            <div className='acc-logo-head'>
            <NavLink to="/account" >
              <img src="/images/account.png" alt=""  />
            </NavLink>
            </div>
            <div className='hover-email'>
              <div>
                {account.email || "not Logged in"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header