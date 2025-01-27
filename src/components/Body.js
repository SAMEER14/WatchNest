import React from 'react';
import Sidebar from './Sidebar';
// import MainContainer from './MainContainer'
// import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    // <div className='flex overflow-hidden'>
    //   <Sidebar />
    //   {/* <MainContainer /> */}
    //   {/* <WatchPage /> */}
    //   {/* here outlet will come and body will render according */}
    //   <Outlet />
    // </div>

    <div className='grid grid-cols-12 gap-4'>
      {/* Sidebar takes up 3 columns */}
      <Sidebar className="col-span-3" />
      
      {/* Main content area */}
      <div className='col-span-9'>
        {/* Outlet renders the MainContainer or any other component depending on the route */}
        <Outlet />
      </div>
    </div>

  )
}

export default Body
