import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearToggle } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"
import SuggestVideo from "./SuggestVideo"
import { YOUTUBE_CHANNEL_API, YOUTUBE_VIDEO_API_BY_ID } from "../utils/constant"
import CommentContainer from "./CommentContainer"
import LiveChat from "./LiveChat"
import { resetMessages } from "../utils/chatSlice"
import VideoDetail from "./VideoDetail"

const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const [videoDetail, setVideoDetail] = useState()
  const [channelDetail, setChannelDetail] = useState()

  const parameters = searchParams.get("v")
  // const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearToggle())
    dispatch(resetMessages())
    getVideoById()
  }, [searchParams])

  const getVideoById = async () => {
    console.log("Video By Id API call")
    console.log("Channel API call")

    const data = await fetch(YOUTUBE_VIDEO_API_BY_ID + parameters)
    const json = await data.json()
    setVideoDetail(json.items[0])
    // console.log("video details", json.items[0])

    const data1 = await fetch(
      YOUTUBE_CHANNEL_API + json.items[0]?.snippet?.channelId
    )
    const json1 = await data1.json()
    setChannelDetail(json1.items[0])
    // console.log("Channel details", json1?.items[0])
  }

  if (!videoDetail) {
    return null
  }

  if (!channelDetail) {
    return null
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9 px-5">
        <iframe
          className="w-full"
          height="600"
          width="1220"
          src={"https://www.youtube.com/embed/" + parameters}
          // src={
          //   "https://www.youtube.com/embed/" +
          //   searchParams.get("v") +
          //   "?autoplay=1&loop=1&playlist=" +
          //   searchParams.get("v")
          // }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
          <VideoDetail detail={videoDetail} channel={channelDetail} />
        </div>
        <div>
          <CommentContainer />
        </div>
      </div>
      <div className="col-span-3 mr-2">
        <div>
          <LiveChat />
        </div>
        <p className="px-5 py-2 m-2 bg-gray-800 text-white rounded-lg text-center">
          Related Videos
        </p>
        <SuggestVideo detail={videoDetail} />
      </div>
    </div>
  )
}

export default WatchPage
