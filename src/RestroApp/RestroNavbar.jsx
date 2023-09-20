import React from 'react'
const RestroNavbar = (props)=>{
    const filterItem = (inputitem) =>{
       return props.onselect(inputitem)
    }
    return(
        <>
           <div className="container-fluid">
            <div className="row my-2 ">
                <div className="col-md-10 col-12  restronav   mx-auto d-flex justify-content-around">
                    <button className='btn btn-warning resitem' onClick={()=>filterItem('Breakfast')}>Breakfast</button>
                    <button className='btn btn-warning resitem' onClick={()=>filterItem('Lunch')}>Lunch</button>
                    <button className='btn btn-warning resitem' onClick={()=>filterItem('Evening')}>Evening</button>
                    <button className='btn btn-warning resitem' onClick={()=>filterItem('Dinner')}>Dinner</button>
                </div>
            </div>
           </div>
        </>
    )
}
export default RestroNavbar;