import React, { useReducer } from 'react'
import './UseReducer.css'

const UseResucerHook = () => {
    const initialstate = 0;
    const Reducer = (state, action)=>{
        if(action.type === 'INCREMENT'){
            return state+1;
        }
        if(action.type === 'DECREMENT'){
            return state-1;
        }
        
    }

   const[state, Dispatch] =  useReducer(Reducer, initialstate);
  return (
    <div>
    <h1 className='text-center bg-primary p-2 text-white'>UseReducer Hook</h1>
    <div className="container-fluid">
        <div className="row mx-auto  align-items-center" style={{height:'80vh'}}>
            <div className="col-md-10 col-10 Reducer_column d-flex justify-content-center flex-column align-items-center text-center mx-auto">
                <h1 className='Reducer_heading'>{state}</h1>
                <button className='Reducer_button my-1' onClick={()=>{Dispatch({type:'INCREMENT'})}}>INC</button>
                <button className='Reducer_button my-1' onClick={()=>{Dispatch({type:'DECREMENT'})}}>DEC</button>

            </div>
        </div>
    </div>
    </div>
  )
}

export default UseResucerHook;