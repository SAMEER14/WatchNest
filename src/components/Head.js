import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const dispatch = useDispatch();

  //will take search suggestios in state variable
  const [suggestions, setSuggestions] = useState([]);

  //show suggestions and hide suggestions
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery);
  //lets use DEBOUNCING 

  useEffect(()=>{
    //HAVE TO MAKE API CALL ONLY IF keystroke GREATER THAN 200ms

    //make api call after every key press
    //but if the difference between 2 api calls is <200ms
    //decline the api call

    // getSearchSuggestions(); //making api call on every keystroke
    // setTimeout(()=> getSearchSuggestions(), 200); //debouncing done

    //ALSO we need to clear timeout 
    const timer = setTimeout(()=> getSearchSuggestions(), 200);
    return () =>{
      clearTimeout(timer);
    }
  }, 
  // [searchQuery]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [searchQuery]
)

  /*
  Keystroke - i
  -render the component
  -useEffect() called
  -start timer => make api call after 200ms

  keystroke -ip (if by chance pressed before 200ms so we need to clear the timer also)
  -//when we cleartimeout now it will destroy the component and useEffect return method
  -render the component
  -useEffect() called
  -start timer => make api call after 200ms
  //new variable is made so every time 200ms timer will run
  */

  //WE WILL DO CACHING FOR SEARCH RESULT........................

  const searchCache = useSelector(store => store.search);
  //How we will find if searchQuery is present in my cache i.e. searchQuery present in store 
  /* this is cache - searchCache - result stored -
  {
    "iphone":["iphone 16, iphone 16 pro",......]  
  }

  and searchQuery is -iphone 

  and if not present in searchCache then call api again 
  */ 

  useEffect(()=>{
    const timer = setTimeout(() => {
      //Also subscribe to cache from redux store
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }
      else {
        getSearchSuggestions();
      }
    },200);
    return () => {
      clearTimeout(timer);
    };
  }, 
  // [searchQuery]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [searchQuery]
)


  //api call for suggestions
  const getSearchSuggestions = async() => {
    // console.log("API CALL - "+searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //if not prsent in cache then make an api call and update in cache 
    //DISPATCH AN ACTION
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
    })
  );
  };

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
    //not passing anything as it does not have any payload
  };

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg sticky top-0 bg-white z-50'>
        
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
        <div>
          <input 
          // className="w-1/2 border-gray-400 rounded-full" type="text"
            className='w-full max-w-xl border border-gray-400 rounded-l-full border-r-0 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
            placeholder="Search"
            value = {searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() =>setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          
          <button className="border border-gray-400 rounded-r-full bg-gray-100 hover:bg-gray-200 py-2 px-4">
              🔍
          </button>
          {/* <div className='fixed bg-white py-2 px-5 w-[36rem] '>
            <ul>
              <li>Iphone</li>
              <li>Iphone 16</li>
            </ul>
          </div> */}
          </div>
          {
          showSuggestions && 
          (
            <div className="fixed bg-white shadow-lg rounded-md py-2 px-4 w-[36rem] z-50">
            <ul className="space-y-2">
              {/* <li className="hover:bg-gray-100 px-3 py-2 rounded-md">iPhone</li> */}
            {
              suggestions.map((s) =>(
              <li key={s} className="hover:bg-gray-100 px-3 py-2 rounded-md">🔍{s}</li>
              )
              )
            }
            
            </ul>
            
          </div> 
          )
          } 
      </div>

      <div>
        <button className='py-2 px-2 mx-4 my-2 bg-red-600 text-white rounded-lg'>
            GPT Search
        </button>
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

export default Head;
