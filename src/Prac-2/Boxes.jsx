import React from 'react'

const Boxes = (props) => {
  return (
    <div className="div m-2 bg-white rounded" style={{width:"200px",height:'200px', boxShadow:'5px 5px 15px -5px black'}} >
         <h6 className='text-center my-1'>{props.data.category}</h6>
        <img className='img-fluid rounded p-2' src={props.data.image} alt="image" />
        <div className="div d-flex justify-content-between p-1">
         <h6 >{props.data.name}</h6>
         <h6 >{props.data.price}</h6>
        </div>
    </div>
  )
}

export default Boxes