import React from "react"
import { useSelector } from "react-redux"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const SavedVideos = () => {
  const Saved = useSelector((store) => store.record.saved)
  return (
    <div className="flex flex-wrap">
      {Object.keys(Saved).length !== 0 ? (
        Object.keys(Saved).map((key) => (
          <Link to={"/watch?v=" + Saved[key].id} key={Saved[key].id}>
            <VideoCard info={Saved[key]} />
          </Link>
        ))
      ) : (
        <p className="p-3 m-4 text-2xl">No Saved Video Available</p>
      )}
    </div>
  )
}

export default SavedVideos
