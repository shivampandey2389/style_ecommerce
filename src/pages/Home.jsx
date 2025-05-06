import { useState } from "react"
import { Cloth } from "../components/Cloth"
import XVICollection from "../components/XVICollection"
import FashionApproach from "../components/FashionApproach"

export const Home =()=>{
  const [search,setSearch] = useState()
  return(
   <>
    <main className="pd">
      <aside>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
        <div className="search-opt">
          <img src="/images/search.png" alt="" />
          <input 
          type="text" 
          placeholder="Search"
          value={search}
          onChange={(e)=>setSearch(e.target.value)} 
           />
        </div>


        <div className="summer-collection">
        <h1>
          New <br/>Collections
        </h1>
        <span>Summer</span>
        <span>2025</span>
        </div>

          <div className="go_move">
          <button className="go_shop_btn">
            <span>Go To Shop</span>
            <img src="/images/Vector.png" alt="" />
          </button>
          <div className="move_div">
            <button disabled={true} className="move_btn"><i className="fa-solid fa-chevron-left"></i></button>
            <button className="move_btn"><i className="fa-solid fa-chevron-right"></i></button>
          </div>
          </div>
  
      </aside>

      <section className="main_hero_section">
        <div className="hero_scroller">
          <div>
            <img src="/images/cloth-1.png" alt="" />
            <img src="/images/cloth-2.png" alt="" />
            <img src="/images/cloth-1.png" alt="" />
            <img src="/images/cloth-2.png" alt="" />
            <img src="/images/cloth-1.png" alt="" />
            <img src="/images/cloth-2.png" alt="" />
          </div>
        </div>
      </section>
    </main>

    <Cloth/>
    <XVICollection/>
    <FashionApproach/>
   </>
  )
}