import React from 'react'
import { NavLink } from 'react-router-dom';
const Web1Cards = (props)=>{
    return(
        <>
          <div className="col-md-4">
          <div className="card service_card" >
                  <img src={props.img} className="card-img-top img-fluid" alt="service_pic" />
                  <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                     {props.description}
                    </p>
                    <NavLink className="btn btn-primary" to={props.btnlink}>learn more</NavLink>
                  </div>
                </div>
          </div>
        </>
    )
}
export default Web1Cards;