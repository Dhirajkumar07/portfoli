import React from "react";
const GkHeader = ()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row align-items-center bg-dark"style={{minHeight:'10vh',boxShadow:'5px 5px 15px -5px black'}}>
                <div className="col-md-2 text-white text-center"style={{fontSize:'30px',fontWeight:'bold'}}>GK</div>
                <div className="col-md-10 text-warning text-center"style={{fontSize:'25px'}}>Google Keep App</div>
            </div>
        </div>
        </>
    )
}
export default GkHeader;