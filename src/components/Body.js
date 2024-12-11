import React from 'react';
import Sidebar from './Sidebar';
// import MainContainer from './MainContainer'
// import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar />
      {/* <MainContainer /> */}
      {/* <WatchPage /> */}
      {/* here outlet will come and body will render according */}
      <Outlet />
    </div>
  )
}

export default Body
