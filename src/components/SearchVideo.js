import React, { useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  YOUTUBE_SEARCH_VIDEO_API,
  YOUTUBE_CHANNEL_API,
} from "../utils/constant"
import VideoList from "./VideoList"
import { OpenMenu } from "../utils/appSlice"

const SearchVideo = () => {
  const [searchParams] = useSearchParams()
  const [searchVideos, setSearchVideos] = useState([])
  const query = searchParams.get("search_query")

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(OpenMenu())
  }, [])

  useEffect(() => {
    getSearchVideos()
  }, [query])

  const getSearchVideos = async () => {
    console.log("Searched video API call")
    const data = await fetch(YOUTUBE_SEARCH_VIDEO_API + query)
    const json = await data.json()
    setSearchVideos(json.items)
    console.log("Search Api", json)
  }

  const [channeldetails, setChanneldetails] = useState([])
  useEffect(() => {
    getChannelDetails()
  }, [])

  const getChannelDetails = async () => {
    console.log("Channel API call")
    const data = await fetch(YOUTUBE_CHANNEL_API + "UCarJoVXH0T2pdtcHBu9J8Bw")
    const json = await data.json()
    setChanneldetails(json.items[0].snippet)
    console.log("Channel Api", json)
  }

  if (searchVideos?.length === 0) {
    return null
  }
  return (
    <div>
      {searchVideos.map((video, i) => (
        <Link to={"/watch?v=" + video.id.videoId} key={i}>
          <VideoList info={video} />
        </Link>
      ))}
    </div>
  )
}

export default SearchVideo
