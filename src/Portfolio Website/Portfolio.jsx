import React from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import { Route, Routes,  } from 'react-router-dom';
import Navbar from './Navbar';
const Portfolio = ()=>{
    return(
        <>
        <Navbar/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/about' Component={About}/>
          <Route exact path='/contact' Component={Contact}/>
          <Route exact path='/service' Component={Service}/>
        </Routes>
        </>
    )
}
export default Portfolio; 
