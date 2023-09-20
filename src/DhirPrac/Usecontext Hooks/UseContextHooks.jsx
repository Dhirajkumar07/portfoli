import React, { createContext } from 'react'
import CompA from './CompA';
  
  const firstName = createContext();
  const lasttName = createContext();
  
const UseContextHooks = () =>{ 
    return( 
        <>
          <firstName.Provider value="Dhiraj">
            <lasttName.Provider value="kumar">
               <CompA/>
            </lasttName.Provider>
          </firstName.Provider>
        </>
    )
}
export default UseContextHooks;
export {firstName, lasttName};