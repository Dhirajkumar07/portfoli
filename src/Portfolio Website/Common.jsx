import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div
                className="row align-items-center"
                style={{ height: "85vh" }}
              >
                <div className="col-md-5">
                  <h1 id="heading_grow">
                    {props.name} <br />
                    <strong id="strong">Dhiraj Tech</strong>
                  </h1>
                  <p className="para">
                    {props.para}
                  </p>
                  <NavLink to={props.link}>
                    <button className="button">{props.btname}</button>
                  </NavLink>
                </div>
                <div className="col-md-5 ms-auto order-1 order-lg-2">
                  <img  className="img-fluid animated" src={props.img} alt="Home_pic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
