import React, { useEffect, useState } from "react"
import TimeAgo from "react-timeago"
import { YOUTUBE_CHANNEL_API } from "../utils/constant"

const VideoList = ({ info }) => {
  const { snippet } = info
  const {
    title,
    channelTitle,
    description,
    thumbnails,
    publishedAt,
    channelId,
  } = snippet

  return (
    <div className="flex w-full shadow-lg ">
      <div className="w-96 rounded-lg  ">
        <img className="px-2 py-3 rounded-3xl " src={thumbnails.medium.url} />
      </div>

      <div className="w-full py-3">
        <p className="px-3 font-bold">{title}</p>
        <span className="px-3">
          <TimeAgo date={publishedAt} />
        </span>
        <div className="flex mx-2 my-2 items-center">
          <img className="h-9 w-9 rounded-full" src={thumbnails.medium.url} />
          <p className=" px-3 py-2 font-bold ">{channelTitle} </p>
        </div>
        <p className="px-3 py-2">{description}</p>
      </div>
    </div>
  )
}

export default VideoList
