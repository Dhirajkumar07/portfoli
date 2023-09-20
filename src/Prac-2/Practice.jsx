import React, { useEffect, useState } from 'react'
import Boxes from './Boxes';
import axios from 'axios';

const Api = "https://api.pujaKaitem.com/api/products"


const Practice = () => {

    const[product, setProduct] = useState([ ])
    console.log(product);

    const apicall = async (url)=>{
       const res = await axios.get(url)
       const result = await res.data
       setProduct(result)
    }

    useEffect(()=>{
      apicall(Api);
    },[])
  return (
    <>
        <div className="conatiner">
            <div className="row mx-auto my-5">
                <div className="col-md-8 mx-auto">
                    <div className="row">
                        <div className="col-md-4 bg-success"></div>
                        <div className="col-md-8 bg-info d-flex p-2 flex-wrap justify-content-between">
                          {
                            product.map((curElm, index)=>{
                                return <Boxes key={index} data={curElm}/>
                                
                            })
                            
                          }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Practice;