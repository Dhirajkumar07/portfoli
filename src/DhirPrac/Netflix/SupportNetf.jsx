import React from "react";
import Netflix from "./Netflix";
import Ndata from "./Ndata";

function SupportNetf() {
  return (
    <>
      <h1
        className="netflix_heading"
        style={{
          color: "cyan",
          backgroundColor: "black",
          padding: "10px",
          fontSize:'25px',
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        {" "}
        1. First Project ( Render, JSX, Prpos, Commponent, import export, Array
        Map Method) Included
      </h1>

      <h1 className="heading_style">
        TOP 6 <span className="netflix">NETFLIX</span> SERIES OF 2023
      </h1>
      {Ndata.map(ncard)}
    </>
  );
}

function ncard(val) {
  return (
    <>
      <Netflix
        key={val.id}
        img={val.img}
        img_details={val.img_details}
        name={val.name}
        link={val.link}
      />
    </>
  );
}
export default SupportNetf;
