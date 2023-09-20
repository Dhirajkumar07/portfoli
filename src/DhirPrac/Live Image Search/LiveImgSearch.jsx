import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Lhome from './Lhome';
import Labout from './Labout';
import Lcontact from './Lcontact'; 
import Lservice from './Lservice';
import Search from './Search';
import LiveMenu from './LiveMenu';
const LiveImgSearch = ()=>{
    return(
        <>
           <LiveMenu/>
           <Routes>
            <Route exect path='/' Component={Lhome}>Home</Route>
            <Route path='/Labout' Component={Labout}>Contact</Route>
            <Route path='/Search' Component={Search}>Contact</Route>
            <Route path='/Lservice' Component={Lservice}>Contact</Route>
            <Route path='/Lcontact' Component={Lcontact}>Contact</Route>
           </Routes>
        </>
    )
}
export default LiveImgSearch;