import React from 'react'

const Button = ({ name }) => {
  return (
    // <div>
    //   <button className="px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">All</button>
    //   <button className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">Gaming</button>
    //   <button className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">Music</button>
    //   <button className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">Live</button>
    //   <button className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">Podcasts</button>
    // </div>

    

    <div>
      {/* <button className="px-4 py-2 m-2 rounded-lg bg-gray-100 hover:bg-gray-300 cursor-pointer">All</button> */}
      <button className="px-4 py-2 m-3 rounded-lg bg-gray-100 hover:bg-gray-300 cursor-pointer whitespace-nowrap">{name}</button>
    </div>
  )
}

export default Button;
