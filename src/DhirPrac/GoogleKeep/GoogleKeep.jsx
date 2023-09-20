import React, { useState } from "react";
import GkHeader from "./GKHeader";
import GoogleNote from "./GoogleNote";
import Note from "./Note";
import GKFooter from "./GKFooter";
const GoogleKeep = ()=>{
  const[item, setItem]=useState([])
  const passbtn = (data)=>{
     setItem((previtemdata)=>{
      return[
        ...previtemdata,data
      ]
     })
  }
  const delnote = (id)=>{
    setItem((previtemdata)=>{
      return previtemdata.filter((element, index)=>{
        return index !== id
      })
    })
  }
    return(
        <>
      <p id="Googlekeep_top_heading"> project no. 7  Googlekeep (hooks, array destructuring, object destructuring,  speread oprt, callback function, array map and filter method) included</p>
          <GkHeader/> 
          <GoogleNote
            passnote={passbtn}
         />
          {
            item.map((value,index)=>{
              return(
                <Note
                  key={index}
                  id={index}
                  title={value.title}
                  notes={value.notes}
                  onselect={delnote}
                />
              )
            })
          }
          <GKFooter/>
        </>
    )
}
export default GoogleKeep;