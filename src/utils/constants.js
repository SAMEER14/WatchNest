export const GOOGLE_API_KEY = "AIzaSyBBWvmol1Omb7s5mygbAg1YlVre6DZytpc";

// const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" + GOOGLE_API_KEY + "HTTP/1.1";

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

// WE SHOULD KEEP KEY IN ENVIRONMENT FILE but now for development we are keeping it here

//video by id 
// export const VIDEO_ID_API = (videoId) => `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=`+ GOOGLE_API_KEY + "HTTP/1.1";

//Youtube search api

// export const SEARCH = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key="+ GOOGLE_API_KEY + "HTTP/1.1";

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const OFFSET_LIVE_COUNT = 25;
