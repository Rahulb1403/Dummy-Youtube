import React from "react"

const VideoCard = ({ info }) => {
  const { snippet, statistics, contentDetails } = info
  const { title, channelTitle, thumbnails } = snippet
  const { duration } = contentDetails

  const timing = duration.replace(/P|T|S/g, "").replace(/H|M/g, ":")
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <div className="relative">
        <img
          className="rounded-xl"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <span className="bg-black text-white text-xs absolute bottom-1 right-1 px-1 font-semibold rounded-md">
          {timing}
        </span>
      </div>
      <p className="text-base font-medium py-2">
        {title.length > 50 ? title.substring(0, 50) + "..." : title}
      </p>
      <p className="text-s font-semibold">{channelTitle}</p>
      <p>
        {Intl.NumberFormat("en", { notation: "compact" }).format(
          statistics.viewCount
        )}{" "}
        views
      </p>
    </div>
  )
}

export default VideoCard
