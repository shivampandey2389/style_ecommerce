import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Header = () => {
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
              <li>Home</li>
              <li>Collections</li>
              <li>New</li>
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
          <div>
            <Link>
              <img src="/images/account.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header