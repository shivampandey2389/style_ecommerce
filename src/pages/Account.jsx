import React from 'react'
import { accInfo } from '../../constant'

const Account = () => {
  return (
    <section className='account-sec'>
      <div className="inner-sec-acc">
        <div className='acc-img'>
          <img src="/images/images.jpg" alt="" height="200px" width="200px" />
        </div>
        <div className='acc-info'>
          <h1>Your Account</h1>
          <div className='acc-list-col'>
            {
              accInfo.map((item)=>(
              <div className='acc-list'>
              <i className={item.iconClass}></i>
                <div className='acc-name-other-info'>
                <h2>{item.name}</h2>
                <p>{item.otherInfo}</p>
              </div>
              </div>
              ))
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default Account