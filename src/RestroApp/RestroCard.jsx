import React from 'react'
const RestroCard = (props)=>{
    return(
        <>
           <div className="container-fluid RestroCard">
            <div className="row my-4">
                <div className="col-md-10 col-11 mx-auto">
                    <div className="row  rs">
                        <div className="col-md-4 ">
                         <img className='img-fluid' src={props.img} alt="dish" />
                        </div>
                        <div className="col-md-8">
                            <h1>{props.name}</h1>
                            <p>{props.discription}</p>
                            <div className="row prisesection">
                                <div className="col-md-6 ItemPrise">Prise : {props.prise}₹</div>
                                <div className="col-md-6"><button className='btn btn-success'>Order Now</button></div>
                            </div>
                            <p>{props.offer}</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>
    )
}
export default RestroCard;