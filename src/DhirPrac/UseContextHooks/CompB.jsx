import React, { useContext } from 'react'
import { BioData } from './Usecontexthooks'
const CompB = () => {
 const first = useContext(BioData)
  return (
    <div>
      <h1>hii my name is {first}</h1>
    </div>
  )
}
 
export default CompB