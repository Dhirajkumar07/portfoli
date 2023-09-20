import React from "react";
import { NavLink } from "react-router-dom";
import './Router.css'
const Menu = ()=>{
    return(
        <>
         <div className="container-fluid">
            <div className="row justify-content-evenly align-items-center" style={{backgroundColor:'black',minHeight:'7vh'}}>
                <div className="col-md-2 text-center " ><NavLink to="/" className="linkstyle">Home</NavLink></div>
                <div className="col-md-2 text-center " ><NavLink to="/About" className="linkstyle">About Us</NavLink></div>
                <div className="col-md-2 text-center " ><NavLink to="/Contact" className="linkstyle">Contact</NavLink></div>
                <div className="col-md-2 text-center " ><NavLink to="/OurServices/dhiraj/kumar" className="linkstyle">OurServices</NavLink></div>
            </div>
         </div> 

        </> 
    )
}
export default Menu;