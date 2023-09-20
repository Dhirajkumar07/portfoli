import React from 'react'
import './Netflix.css'

function Netflix(props){
    return(
    <> 
    <div className="cards">
      <div className="card">
         <img className='img' src={props.img} alt="Netflix movies pic" />
         <p className='img_details'>{props.img_details}</p>
         <h1 className='name'>{props.name}</h1>
         <a href={props.link}><button className='btn'>Watch Now</button></a>
        </div>
      </div>
    </>
    )
}
export default Netflix;