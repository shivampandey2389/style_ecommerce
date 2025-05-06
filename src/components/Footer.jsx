import React from 'react'
import { footerInfo, Languages } from '../../constant'

const Footer = () => {
  return (
    <footer>
      <div className='list'>
        <div className="footer-in">
          <h1>Info</h1>
          <ul>
           {footerInfo.map((info)=>
            (<li key={info}>{info}</li>)
           )}
          </ul>
        </div>

        <div className='footer-in'>
          <h1>Languages</h1>
          <ul>
            {
              Languages.map((lang)=>(
                <li key={lang}>{lang}</li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className='logo-div'>
          <span>Technologies</span>
          <img src="/images/logo.png" alt="logo" />
          <div>
          <h1>XVI <br />QR</h1>
          <span> Near-field communication</span>
          </div>
      </div>

      <div>

      </div>
      
    </footer>
  )
}

export default Footer