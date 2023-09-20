import React, { useState } from 'react'
import './RestroCard.css'
import RestroNavbar from './RestroNavbar';
import RestroCard from './RestroCard';
import RestroItem from './RestroMenu';
const RestroApp = ()=>{
  const[items, setItems]=useState(RestroItem)
  
  const passnote = (inputItem)=>{
    const matchItem = RestroItem.filter((elements)=>{
           return elements.category === inputItem
    })
    setItems(matchItem)
    
  }
    return(
        <>
          <h2  className='col-md-11  p-3 mx-auto  text-center rsheading'>Order Your Favourite Dish</h2>
          <hr />
          <RestroNavbar
            onselect={passnote}
          /> 
          {
            items.map((value, index)=>{
                return  <RestroCard
                           key={index}
                           img={value.img}
                           name={value.name}
                           discription={value.discription}
                           prise={value.prise}
                           offer={value.offer}
                           category={value.category}
                        />
            })
          }
        </>
    )
}
export default RestroApp;