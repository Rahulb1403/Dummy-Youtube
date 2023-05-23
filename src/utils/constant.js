const API_KEY = process.env.REACT_APP_API_KEY2

export const LIVE_CHAT_COUNT = 25

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&relevanceLanguage=hi&maxResults=30&regionCode=IN&key=" +
  API_KEY

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_SEARCH_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=" +
  API_KEY +
  "&q="

export const YOUTUBE_CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id="

// export const YOUTUBE_RELATED_VIDEO_API =
//   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
//   API_KEY +
//   "&q="

export const YOUTUBE_VIDEO_API_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id="

export const buttons = [
  {
    name: "All",
    videoCategoryId: "0",
  },
  {
    name: "Music",
    videoCategoryId: "10",
  },
  {
    name: "Gaming",
    videoCategoryId: "20",
  },
  {
    name: "Sports",
    videoCategoryId: "17",
  },
  {
    name: "News",
    videoCategoryId: "25",
  },
  {
    name: "Entertainment",
    videoCategoryId: "24",
  },
  {
    name: "Comedy",
    videoCategoryId: "23",
  },
  {
    name: "Cars",
    videoCategoryId: "2",
  },
  {
    name: "Film",
    videoCategoryId: "1",
  },
  {
    name: "Blogs",
    videoCategoryId: "22",
  },
  {
    name: "Animals",
    videoCategoryId: "15",
  },
  {
    name: "Science",
    videoCategoryId: "28",
  },
  {
    name: "News",
    videoCategoryId: "25",
  },
  {
    name: "Entertainment",
    videoCategoryId: "24",
  },
  {
    name: "Comedy",
    videoCategoryId: "23",
  },
  {
    name: "Cars",
    videoCategoryId: "2",
  },
  {
    name: "Film",
    videoCategoryId: "1",
  },
  {
    name: "Blogs",
    videoCategoryId: "22",
  },
]
