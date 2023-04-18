import React, { useEffect, useState } from "react"
import { YOUTUBE_CHANNEL_API } from "../utils/constant"

const VideoList = ({ info }) => {
  const [channeldetails, setChanneldetails] = useState([])
  console.log(info)
  const { snippet } = info
  const {
    title,
    channelTitle,
    description,
    thumbnails,
    publishedAt,
    channelId,
  } = snippet
  const date = new Date(publishedAt)
  const year = date.getFullYear()
  const diff = 2023 - Number(year)

  useEffect(() => {
    getChannelDetails()
  }, [])

  const getChannelDetails = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_API + channelId)
    const json = await data.json()
    setChanneldetails(json.items[0].snippet)
  }

  return (
    <div className="flex w-full shadow-lg ">
      <div className="w-96 rounded-lg  ">
        <img className="px-2 py-3 rounded-3xl " src={thumbnails.medium.url} />
      </div>

      <div className="w-full py-3">
        <p className="px-3 font-bold">{title}</p>
        <p className="px-3">{diff} years ago</p>
        <div className="flex mx-2 my-2">
          <img
            className="h-9 w-9 rounded-full"
            src={channeldetails?.thumbnails?.default?.url}
          />
          <p className=" px-3 py-2 font-bold ">{channelTitle} </p>
        </div>
        <p className="px-3 py-2">{description}</p>
      </div>
    </div>
  )
}

export default VideoList
