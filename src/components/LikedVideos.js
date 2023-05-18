import React from "react"
import { useSelector } from "react-redux"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const LikeVideos = () => {
  const liked = useSelector((store) => store.record.like)
  return (
    <div className="flex flex-wrap">
      {Object.keys(liked).length !== 0 ? (
        Object.keys(liked).map((key) => (
          <Link to={"/watch?v=" + liked[key].id} key={liked[key].id}>
            <VideoCard info={liked[key]} />
          </Link>
        ))
      ) : (
        <p className="p-3 m-4 text-2xl">No liked Video Available</p>
      )}
    </div>
  )
}

export default LikeVideos
