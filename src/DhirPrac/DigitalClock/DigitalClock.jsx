import React, { useState } from 'react'
import './Digitalclock.css'
const DigitalClock = ()=>{
    const [currtime, setCurrtime] = useState();
    const time = new Date().toLocaleTimeString();
    setTimeout(() => {
    setCurrtime(time)
    }, 1000);
   
    return(
        <>
         <h1 className="digitalclock_top_heading"> project no 4. Digitalclock  (Settimeout & Date metthod) included</h1>
           <div className="digitalclock_main_div">
            <div className="digitalclock_div">
            <h1 className='digitalclock_heading'>{currtime}</h1>
            </div>
           </div>
        </>
    )
}
export default DigitalClock;