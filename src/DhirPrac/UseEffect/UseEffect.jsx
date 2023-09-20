import React, { useEffect, useState } from 'react'
const Effect = ()=>{
    const [num, setNum] = useState(0)
    const btnclick = ()=> setNum(num+1)
    useEffect(()=>{ 
       alert("I am clicked");
    },[])
    return(
        <>
        <button onClick={btnclick}>click me {num}</button>
        </>
    )
}
export default Effect;