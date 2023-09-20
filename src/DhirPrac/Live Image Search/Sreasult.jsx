import React from 'react'
const Srerult = (props)=>{
    const img = `https://source.unsplash.com/250x200/?${props.name}`;
    return(
        <>
           <div>
            <img src={img} alt="Search pic" />
           </div>
        </>
    )
}
export default Srerult;