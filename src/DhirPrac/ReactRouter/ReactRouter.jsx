import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import OurServices from './OurServices';
const ReactRouter = ()=>{ 
    return(
        <>
           <Menu/>
          <Routes>
            <Route exect path='/' Component={Home}></Route>
            <Route path='/About' Component={About}></Route>
            <Route path='/Contact' Component={Contact}></Route>
            <Route path='/OurServices/:fname/:lname'Component={OurServices}></Route>
          </Routes>
        </> 
    )
}
export default ReactRouter;