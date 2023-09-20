import React, { useState } from "react";
import './Googlekeep.css'
const GoogleNote = (props) => {
  const[data, setData]=useState({
    title:'',
    notes:''
  })
  
  const inputevent = (event)=>{
     const{value, name}=event.target
      setData((prevalue)=>{
        return{
            ...prevalue,
            [name]:value
        }
      })
  }
  const btnclicked = ()=>{
   props.passnote(data)
   setData({
    title:'',
    notes:'',
  });
  }
  return (
    <>
      <div id="GKMD" className="main_div" style={{ width: "100%", minHeight:'40vh',display: "flex",justifyContent: "center",padding:'30px' }}>
        <div
          style={{
            width: "360px",
            height: "220px",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius:'10px',
            boxShadow:'5px 5px 15px -5px black'
          }}
        >
          <input type="text" name="title" value={data.title}  onChange={inputevent} placeholder="Title.." style={{fontSize:'25px',padding:'10px',fontWeight:'bold',textTransform:'capitalize',border:'none',outline:'none'}}/>
          <textarea
            name="notes"
            value={data.notes}
            onChange={inputevent}
            placeholder="Write Notes.."
            cols="30"
            rows="4"
          style={{border:'none',outline:'none',fontSize:'20px',padding:'10px'}}></textarea>
          <span>
            <button id="add_button" onClick={btnclicked}  style={{width:'40px',height:'40px' ,border:'none',outline:'none', fontSize:'25px',fontWeight:'bold',backgroundColor:'white',borderRadius:'50%',boxShadow:'5px 5px 15px -5px black',padding:'2px'}}>A</button>
          </span>
        </div>
      </div>
    </>
  );
};
export default GoogleNote;
