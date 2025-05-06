import React from 'react'
import { xviColl } from '../../constant'

const XVICollection = () => {
  return (
    <section className="xvi_cnt pd">
      <div className="new_week_header">
        <h1>XIV <br /> COLLECTIONS <br />23-24</h1>
        <button>See All</button>
      </div>
      <div className="new-week-collection">
             <div className="new-week-collection-cart">
              {
                xviColl.map((tshirt)=>(
                  <div className="tshirt-cart" key={tshirt.id}>
                  <img src={tshirt.url} alt={tshirt.tshirtName} width="400px" height="400px" />
                  <div className="tshirt-desc">
                    <div className="tshirt-name-desc">
                      <span>{tshirt.tshirtName} </span>
                      <h3>{tshirt.tshirtDesc}</h3>
                    </div>
                    <span>₹ {tshirt.price}</span>
                  </div>
                </div>
                ))
              }
      
             </div>
           </div>
        <div className='more-opt-sec'>
          <div className='more-opt'>
          <span>More</span>
          <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
    </section>
  )
}

export default XVICollection