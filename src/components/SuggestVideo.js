import React, { useEffect, useState } from "react"
import { YOUTUBE_SEARCH_VIDEO_API } from "../utils/constant"
import SuggestVideoCard from "./SuggestVideoCard"
import { Link } from "react-router-dom"

const SuggestVideo = ({ detail }) => {
  const vidName = (detail?.snippet?.localized?.title).replace(
    /[^a-zA-z0-9 ]/g,
    ""
  )
  const [relatedVideo, setRelatedVideo] = useState()
  useEffect(() => {
    getRelatedVideo()
  }, [vidName])

  const getRelatedVideo = async () => {
    console.log("Related Video API call")
    const data = await fetch(YOUTUBE_SEARCH_VIDEO_API + vidName)
    const json = await data.json()
    setRelatedVideo(json?.items)
    // console.log(json?.items)
  }

  if (!relatedVideo) {
    return null
  }

  return (
    <div>
      {relatedVideo?.map((video) => (
        <Link to={"/watch?v=" + video.id.videoId} key={video.etag}>
          <SuggestVideoCard info={video} />
        </Link>
      ))}
    </div>
  )
}

export default SuggestVideo
