import React from 'react' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Portfolio from './Portfolio Website/Portfolio'
import TechNewsApp, { AppProvider } from './Tech News App/TechNewsApp'
//import Practice from './Prac-2/Practice'
//import RestroApp from './RestroApp/RestroApp'
//import WetherApp from './WetherApp/WetherApp'
//import UseResucerHook from './DhirPrac/UseReducer Hook/UseResucerHook'
//import UseContextHooks from './DhirPrac/Usecontext Hooks/UseContextHooks'
//import LiveImgSearch from './DhirPrac/Live Image Search/LiveImgSearch';
//import GoogleKeep from './DhirPrac/GoogleKeep/GoogleKeep'
//import UseEffect from './DhirPrac/UseEffect/UseEffect'
//import ReactRouter from './DhirPrac/ReactRouter/ReactRouter'
//import SupportNetf from './DhirPrac/Netflix/SupportNetf'
//import Likebtn from './DhirPrac/LikeButton/Likebtn'
//import GetTime from './DhirPrac/GetTime/GetTime'
//import DigitalClock from './DhirPrac/DigitalClock/DigitalClock'
//import Froms from './DhirPrac/Forms/Forms'
//import Todolist from './DhirPrac/Todolist/Todolist'

const App = ()=>{
  return(
    <>
      <AppProvider>
       <Portfolio/>
      </AppProvider>
    </>
  )
}
export default App;
