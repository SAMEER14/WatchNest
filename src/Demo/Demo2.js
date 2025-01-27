import { current } from '@reduxjs/toolkit';
import React, { useRef, useState,useEffect } from 'react'

const Demo2 = () => {

    let x =0;

    const [stateY, setStateY] = useState(0);

    const ref = useRef(0)
    // const i = useRef(0)
    // its not like ref=0 its a object with ref = {current :0}

    // useEffect(() => {
    //     if (i.current) return;
    //     i.current = setInterval(() => {
    //       //console.log("Namaste React", Math.random());
    //     }, 1000);
    //   }, []);

  return (
    <div className='m-4 p-2 bg-slate-400 border-black w-96 h-96'>
      
      <button className='m-4 p-2 bg-green-600' onClick={() => {
        x=x+1;
        console.log("x = "+ x);
        //it increase but does not render on UI , because using let 
      }}>
        Change Value
        </button>
      <h1>let x = {x} </h1>

      <button className='m-4 p-2 bg-green-600' onClick={() => {
        setStateY(stateY+1)
        console.log("Rendering..... stateY = " +stateY);
        //it increase but does not render on UI , because using let 
      }}>
        Change Value
        </button>

        <h1>State Y = {stateY} </h1>
        {/* whenever i chnge state variable again it re render and let value again assigned the default value */}

        <button className='m-4 p-2 bg-green-600' onClick={() => {
        ref.current = ref.current +1;
        console.log("ref = " +ref.current);
        //it increase but does not render on UI , because using let 
      }}>
        Change Value
        </button>
        <h1 className='font-bold text-xl'>Ref = {ref.current} </h1>

        {/* <button
        className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Printing
      </button> */}

    </div>
  )
}
 
export default Demo2
