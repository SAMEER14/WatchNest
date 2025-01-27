import React from 'react'

const VideoCards = ({info}) => {

    // console.log(info);

    const { snippet,statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const { viewCount, } = statistics;

    // const formatViews = (viewCount) => {
    //   if (viewCount >= 1000) {
    //     return `${(viewCount / 1000).toFixed(1).replace(/\.0$/, '')}K views`;
    //   }
    //   return `${viewCount} views`;
    // };
        
  return (
    <div className='p-2 m-2 w-72 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <img className='rounded-lg w-full h-40 object-cover' src={thumbnails.medium.url} alt="videoThumbnail" />
      <ul className="mt-3">
        <li className="text-sm font-semibold text-gray-800 line-clamp-2">{title}</li>
        {/* <li className="text-sm text-gray-600 mt-1">{channelTitle}</li> */}
        <li className="font-semibold mt-2">{channelTitle}</li>
        <li className="text-sm text-gray-500 mt-1">{viewCount} views</li>
        {/* <li className="text-sm text-gray-500 mt-1">{formatViews(viewCount)}</li> */}

      </ul>
    </div>
  )
}


//HOC 
// export const VideoCardBorder = (VideoCards) => {
//   return <div className='p-1 m-1 border border-black'>
//           <VideoCards />
//         </div>
// }
//This VideoCardBorder is a HIGHE ORDER COMPONENT/FUNCTION here
//Example in youtube page an add in video list page

export default VideoCards
