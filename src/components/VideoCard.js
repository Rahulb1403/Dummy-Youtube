import React from "react"

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info
  const { title, channelTitle, thumbnails } = snippet
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-xl" alt="thumbnail" src={thumbnails.medium.url} />
      <p className="font-bold py-2">{title}</p>
      <p>{channelTitle}</p>
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
