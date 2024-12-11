import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from "../utils/appSlice";
// import { useParams } from 'react-router';
import { useSearchParams } from 'react-router';

const WatchPage = () => {

  //reading video id , using useParams
  // const params = useParams();
  // console.log(params);
  //when we see it comes empty because they are search params they are not normal parms "/...."
  
  //We will use useSearchParmas
  const [searchParmas] = useSearchParams();
  console.log(searchParmas.get("v")); //this gives exact video id
  const videoId = searchParmas.get("v");

  //Dispatch an action for toggle sidebar to close on watch component
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(closeMenu());
  },[])

  return (
    <div className="w-[944px] h-[531px] absolute left-[25px] rounded-lg shadow-lg bg-black">
      
      {/* <h1>WatchPage</h1> */}
      {/* Here we can make a seperate api call with this video if , for now we will use embed format iframe*/}
      <iframe 
      // width="560" 
      // height="315" 
      className="w-full h-full rounded-lg"
      src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      
    </div>
  )
}

export default WatchPage
