import React, { useEffect, useState } from "react"
import TimeAgo from "react-timeago"

const SuggestVideoCard = ({ info }) => {
  const { snippet } = info
  const { title, channelTitle, thumbnails, publishedAt, channelId } = snippet

  return (
    <div className="w-full my-2 grid grid-flow-col grid-cols-8 gap-3 p-1 shadow-md">
      <div className=" col-span-3 content-center">
        <img
          className="rounded-md bg-contain min-w-full h-[110px]"
          src={thumbnails.medium.url}
        />
      </div>

      <div className="col-span-5">
        <p className="text-base font-medium mb-2 line-clamp-2">{title}</p>
        <span className="text-xs font-semibold">
          <TimeAgo date={publishedAt} />
        </span>
        <div className="flex mx-2 my-2">
          {/* <img
            className="h-9 w-9 rounded-full"
            src={channeldetails?.thumbnails?.default?.url}
          /> */}
          <p className="text-xs font-semibold">{channelTitle} </p>
        </div>
      </div>
    </div>
  )
}

export default SuggestVideoCard
