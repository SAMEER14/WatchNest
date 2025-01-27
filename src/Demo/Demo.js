import React, { useState, useMemo } from 'react';
import { findPrime } from './helperDemo';

const Demo = () => {

    const [text, setText] = useState("")

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // console.log("redering.." + text);
    //component render again and again on state changes
    //If this would be a heavy operation
    // const prime = findPrime(text);
    const prime = useMemo(() => findPrime(text), [text]) ;
    //here heavy number calculation freezes 

  return (
    <div className=
    {
      'm-4 p-2 w-96 h-96 border border-black ' + 
      (isDarkTheme && "bg-gray-900 text-red-700")
    }
    >
      <div>
        <button 
        className='m-10 p-2 bg-blue-600' 
        onClick={()=> setIsDarkTheme(!isDarkTheme)}>
          Change background
          </button> 
      </div>
      {/* Whenever we toggle it is rendering, so how to optimise it and why it reredner because in rect whenever state changes rerender happens */}
      {/* to optimise we can use useMemo which caches the result during rerender */}
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">
            nth Prime : {prime}
        </h1>
      </div>
      
    </div>
  )
}

export default Demo
