import React from 'react'
import { fashionModel } from '../../constant'

const FashionApproach = () => {
  return (
    <section className='fashion-sec pd'>
      <div className='fashion-app-header'>
        <div>
          <h1>OUR APPROACH TO FASHION DESIGN</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quae id nihil quisquam earum laudantium reprehenderit quibusdam! Quam qui, possimus delectus, deleniti nulla accusamus earum incidunt amet reprehenderit consequatur, blanditiis sapiente minima! Maxime, at eos.</p>
        </div>
      </div>
      <div className="model-collection" >
        {fashionModel.map((item)=>(
        <div className={item.id % 2===0 ?"img-cnt align-st":"img-cnt align-en"} key={item.id}>
          <img src={item.url} alt={item.name} width="100%" />
        </div>
        )
        )}
      </div>
    </section>
  )
}

export default FashionApproach