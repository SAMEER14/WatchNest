import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from "../utils/appSlice";
// import { useParams } from 'react-router';
import { useSearchParams } from 'react-router';
// import { VIDEO_ID_API } from '../utils/constants';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import SendMessageLive from "./SendMessageLive";

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

      {/* Video and Live Chat  */}
      <div className="flex w-full">
      
      {/* Video Section */}
      <div className='flex-grow w-[1400px] h-[800px] left-[25px] rounded-lg shadow-lg bg-black'>
        {/* <h1>WatchPage</h1> */}
        {/* Here we can make a seperate api call with this video if , for now we will use embed format iframe*/}
        <iframe 
        // width="560" 
        // height="315" 
        className="w-full h-full rounded-lg"
        src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          
        </iframe>
        
        {/* adding youtube video by id  */}
      </div>
        
        
        {/* Live Chat section */}
        {/* <div className="w-[400px] h-[800px] ml-4 rounded-lg shadow-lg bg-gray-100 overflow-y-scroll flex flex-col-reverse">
        <SendMessageLive />
        <LiveChat />
        
        </div> */}
        <div className="w-[400px] h-[800px] ml-4 rounded-lg shadow-lg bg-gray-100 flex flex-col">
          {/* Live Chat Messages */}
          <div className="flex-grow overflow-y-scroll p-2 flex flex-col-reverse">
            <LiveChat />
          </div>

          {/* Input Box for sending LIVE MESSAGE*/}
          <div className="border-t border-gray-300">
            <SendMessageLive />
          </div>
        </div>
        
      </div >
    
    {/* <div className="w-full max-w-[1400px] mt-6"> */}
    <div className="w-full mt-6">
    <CommentsContainer />
    </div>
    

    </div>
    
  )
}

export default WatchPage
