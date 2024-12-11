const GOOGLE_API_KEY = "AIzaSyBBWvmol1Omb7s5mygbAg1YlVre6DZytpc";

// const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" + GOOGLE_API_KEY + "HTTP/1.1";

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

// WE SHOULD KEEP KEY IN ENVIRONMENT FILE but now for development we are keeping it here