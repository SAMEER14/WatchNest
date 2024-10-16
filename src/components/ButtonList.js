import React from 'react'
import Button from './Button';
// import { useRef } from 'react';

const ButtonList = () => {

  // ====----------------
  // -------------------

  const buttonListName = [
    "All",
    "Gaming",
    'Football',
    "Cricket",
    "Live",
    "Web Development",
    "Javascript",
    "React",
    "APIs",
    "Samsung",
    "iPhones",
    "Music",
    "Cars",
    "Mixes",
    "Professional wrestling",
    "Podcasts",
    "Food",
    "New to you"
    ]

  return (

    <div className='flex overflow-x-auto space-x-4'>
{/* USE SCROLL using button using CSS */}

      {/* ------------------------ BUTTON MAP METHOD HERE*/}
      <div className='flex overflow-x-auto space-x-4 scrollbar-hide' >
      {
      buttonListName.map((buttonName, index) => 
        <Button key ={index} name={buttonName}/>
        )
      }
      </div>
      
      {/* ---------------------- */}

   
    </div>


    // <div className=' flex '>
    //   {/* we can pass props to show dynamic buttons */}
    //   <Button name="All"/>
    //   <Button name="Gaming"/>
    //   <Button name="Football"/>
    //   <Button name="Cricket"/>
    //   <Button name="Live"/>
    //   <Button name="Music"/>
    //   <Button name="Podcasts"/>
    //   <Button name="Food"/>

    //   {/* it looks like repeating we can make list and map and render it  */}
    // </div>
  )
}

export default ButtonList
