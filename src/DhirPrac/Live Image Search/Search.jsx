import React, { useState } from 'react'
import Srerult from './Sreasult'
const Search = ()=>{
    const[img, setImg]=useState()
    const InputEvent = (event)=>{
        setImg(event.target.value)
    }
    return(
        <>
           <div className="container-fluid">
            <div className="row justify-content-center py-4 ">
                <div className="col-md-10 d-flex justify-content-center">
                    <input type="text" value={img} onChange={InputEvent} placeholder='write anythings..'style={{padding:'5px',fontSize:'1.2rem',textTransform:'capitalize',fontFamily:'monospace'}} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-10  d-flex justify-content-center">
                {img === " " ? null : <Srerult name={img}/>}
                </div>
            </div>
           </div>
        </>
    )
}
export default Search;