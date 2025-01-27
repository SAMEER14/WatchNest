import React from 'react';
import { useEffect,useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
// import VideoCards, {VideoCardBorder} from './VideoCards';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

const [ videos, setVideos ] = useState([]);


useEffect(() => { 
  getVideos() 
  } ,
  [])

const getVideos = async() =>{
  const data = await fetch(YOUTUBE_VIDEO_API);
  const json = await data.json();
  // console.log(json.items);
  setVideos(json.items)
}

return (
    // <div className='flex flex-wrap'>
    // <div className='flex flex-wrap gap-4 h-full overflow-y-auto p-4 w-full'>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 h-full overflow-y-auto p-4'> 

      {/* <VideoCards info={videos[0]}/> */}
      {/* use map later after checking for one */}
      {/* iterate over map */}
      {
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v="+video.id}> 
            <VideoCards info={video}/> 
            {/* <VideoCardBorder /> */}
          </Link>
              )
            )
        }
        
    </div>
  );
};


export default VideoContainer;
