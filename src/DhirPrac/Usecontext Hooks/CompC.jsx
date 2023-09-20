import React, { useContext } from 'react'
import {firstName, lasttName} from './UseContextHooks'
const CompC = () =>{
    const fname = useContext(firstName)
    const lname = useContext(lasttName)

    return(
        <>
          <h1>Hii I am {fname} {lname}</h1>
        </>
    )
}
export default CompC;