import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearToggle } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"
import SuggestVideo from "./SuggestVideo"
import { YOUTUBE_VIDEO_API_BY_ID } from "../utils/constant"
import CommentContainer from "./CommentContainer"
import LiveChat from "./LiveChat"
import { resetMessages } from "../utils/chatSlice"

const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const [videoDetail, setVideoDetail] = useState()
  const parameters = searchParams.get("v")
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearToggle())
    dispatch(resetMessages())
    getVideoById()
  }, [searchParams])

  const getVideoById = async () => {
    console.log("Video By Id API call")
    const data = await fetch(YOUTUBE_VIDEO_API_BY_ID + parameters)
    const json = await data.json()
    setVideoDetail(json.items[0])
    // console.log("video details", json.items[0])
  }

  if (!videoDetail) {
    return null
  }
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9 px-5">
        <iframe
          // className="w-full h-[600px] col-span-9"

          className={isMenuOpen ? "w-[1120px]" : ""}
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
