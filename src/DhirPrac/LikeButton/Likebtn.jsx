import React, { useState } from "react";
import "./LikeButton.css";
const LikeButton = () => {
  const[value, setValue] = useState(0)
  const btnclick = ()=>{
   setValue(value+1);
  }
  const btndec  = ()=>{
    if(value>0){
      setValue(value-1)
    }else alert("Zero limit reachead")
  }
  return (
    <>
      <h1 className="likebutton_heading">2. project LikeButton (hooks, & conditional statement ) included</h1>
      <div className="likebutton_main_div">
       <div className="likebutton_content_div">
       <h1 className="likebutton_result_heading">{value}</h1><br />
          <div className="likebutton_button_div">
            <button className="likebutton_btn" onClick={btnclick} >like</button> 
            <button className="likebutton_btn" onClick={btndec} >Dislike</button>
          </div>
       </div>
      </div>
    </>
  );
};
export default LikeButton;
