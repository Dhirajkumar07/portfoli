import React, { useContext } from 'react'
import { BioData } from './CompA'
const CompC = () => {
    const name =  useContext(BioData)
  return (
    <div>
      <h1>hii my name is {name}</h1>
    </div>
  )
}

export default CompC