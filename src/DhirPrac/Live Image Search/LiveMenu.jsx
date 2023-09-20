import React from "react";
import { NavLink } from "react-router-dom";
import "./LiveImg.css";
const LiveMenu = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center py-2">
          <div className="col-sm-2 p-0 ">
            <NavLink className="link text-dark font-bold" to="/">
              Dhiraj Tech
            </NavLink>
          </div>
          <div className="col-sm-2  ">
            <NavLink className="link text-dark" to="/Labout">
              About
            </NavLink>
          </div>
          <div className="col-sm-2 text-center ">
            <NavLink className="link text-dark" to="/Search">
              Search
            </NavLink>
          </div>
          <div className="col-sm-2  text-end ">
            <NavLink className="link text-dark" to="/Lcontact">
              Contact
            </NavLink>
          </div>
          <div className="col-sm-2 text-end  p-0">
            <NavLink className="link text-dark" to="/Lservice">
              Service
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default LiveMenu;
