import React, { useState } from "react";
import './Gettime.css'
const GetTime = () => {
  const [time, setTime] = useState("Click Button");
  const GetCurrTime = () => {
    const Newtime = new Date().toLocaleTimeString();
    setTime(Newtime);
  };
  return (
    <>
    <h1 className="gettime_top_heading"> project no 3. Get Time  (Hooks and Date mathed) included</h1>
        <div className="gettime_main_div">
           <div className="gettime_content_div">
                 <h1 className="gettime_heading">{time}</h1>
                 <button className="gettime_button" onClick={GetCurrTime}> Get Time</button>
            </div>
        </div>
    </>
  );
};
export default GetTime;
