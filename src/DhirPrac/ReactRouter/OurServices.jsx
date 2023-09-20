import React from "react";
import {  useLocation, useParams } from "react-router-dom";
const OurServices = ()=>{
    const{fname, lname}=useParams();
    const location = useLocation();
    return(
        <>
         <h1 style={{textAlign:'right',color:'blue',margin:'10px'}}>This is {fname} {lname} Page</h1>
         <h3>my current location is : {location.pathname}</h3>
         {location.pathname === `/OurServices/rakesh/raja`?(
            <button onClick={()=>{alert("you are my subscriber")}}>click me</button>
         ):null}
         <h2>react-router-dom didn't find (useHistory) </h2>
        </>
    )
} 
export default OurServices; 