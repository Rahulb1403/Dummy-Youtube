import React, { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constant"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const VideoContainer = () => {
  const category = useSelector((store) => store.app.videoCategory)
  const [videos, SetVideos] = useState([])

  useEffect(() => {
    getVideo()
  }, [category])

  const getVideo = async () => {
    console.log("Home Video API call")
    const data = await fetch(
      YOUTUBE_VIDEOS_API + "&videoCategoryId=" + category
    )
    const json = await data.json()
    SetVideos(json.items)
    // console.log("Home", json.items[0])
  }

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer
