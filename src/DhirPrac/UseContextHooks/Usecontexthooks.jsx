import  { createContext } from 'react'
import CompA from './CompA'

const Usecontexthooks = () => {
  const BioData = createContext();
  return (
    <div>
      <BioData.Provider value={"Dhiraj kumar"}>
        <CompA/>
      </BioData.Provider>
    </div> 
  )
}
export default Usecontexthooks;
export { BioData }