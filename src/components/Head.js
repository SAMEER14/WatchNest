import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
    //not passing anything as it does not have any payload
  };

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        
      <div className="flex items-center col-span-1 "> 
        
        <img
        //add event handler
        onClick={() => toggleMenuHandler()}
        //Now on click it changes to true->false and false-> true
        //Now this need to toggle using useSelector
        
            className='h-8 cursor-pointer' 
            alt="menu" 
            src="https://www.svgrepo.com/show/452302/hamburger-menu.svg"/> 
        
        <img
            // className='h-10'
            className="w-20 h-auto mx-2" 
            alt="youtube-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png"/>
    
      </div>

      <div className='col-span-10 pt-6'>
        <input 
        // className="w-1/2 border-gray-400 rounded-full" type="text"
        className='w-full max-w-xl border border-gray-400 rounded-l-full border-r-0 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
        placeholder="Search" />
        <button className="border border-gray-400 rounded-r-full bg-gray-100 hover:bg-gray-200 py-2 px-4">
            🔍</button>
      </div>

      <div>
        <img
            className='w-10 h-10 col-span-1' 
            alt="user" 
            src="https://banner2.cleanpng.com/20180622/tqt/aazen4lhc.webp"/>
      </div>
    </div>
  )
}

export default Head
