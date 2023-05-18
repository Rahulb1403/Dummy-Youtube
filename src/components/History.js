import React from "react"
import { useSelector } from "react-redux"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const History = () => {
  const history = useSelector((store) => store.record.history)
  return (
    <div className="flex flex-wrap">
      {Object.keys(history).length !== 0 ? (
        Object.keys(history).map((key) => (
          <Link to={"/watch?v=" + history[key].id} key={history[key].id}>
            <VideoCard info={history[key]} />
          </Link>
        ))
      ) : (
        <p className="p-3 m-4 text-2xl">No History Available</p>
      )}
    </div>
  )
}

export default History
