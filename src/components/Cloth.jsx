import { newWeek } from "../../constant"
export const Cloth =()=>{
  return(
    <section className="cnt pd">
     <div className="new_week_header">
       <h1>NEW <br /> THIS WEEK <sup>(50)</sup></h1>
       <button>See All</button>
     </div>
     <div className="new-week-collection">
       <div className="new-week-collection-cart">
        {
          newWeek.map((tshirt)=>(
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
    </section>
  )
}