import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from "../utils/appSlice";
// import { useParams } from 'react-router';
import { useSearchParams } from 'react-router';
// import { VIDEO_ID_API } from '../utils/constants';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

  //reading video id , using useParams
  // const params = useParams();
  // console.log(params);
  //when we see it comes empty because they are search params they are not normal parms "/...."
  
  //We will use useSearchParmas
  const [searchParmas] = useSearchParams();
  // console.log(searchParmas.get("v")); //this gives exact video id
  const videoId = searchParmas.get("v");

  //Dispatch an action for toggle sidebar to close on watch component
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(closeMenu());
  },[])

  /*
  //state variable for video by Id
  const[ videoById,setVideoById ] = useState();

  useEffect( ()=>{
    fetchVideoById();
  },[])

  const fetchVideoById = async() =>{
    const data = await fetch(VIDEO_ID_API);
    const json = await data.json();
    console.log(json.items);
    setVideoById(json.items);
  }
*/
  return (
    <div className='flex flex-col items-center p-4'>
    <div className="w-[944px] h-[531px] left-[25px] rounded-lg shadow-lg bg-black">
      
      {/* <h1>WatchPage</h1> */}
      {/* Here we can make a seperate api call with this video if , for now we will use embed format iframe*/}
      <iframe 
      // width="560" 
      // height="315" 
      className="w-full h-full rounded-lg"
      src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      
      {/* adding youtube video by id  */}
    </div >
    <div className="w-full max-w-[944px] mt-6">
    <CommentsContainer />
    </div>
    

    </div>
    
  )
}

export default WatchPage
