import React from "react"
import { useDispatch } from "react-redux"
import { changeCategory } from "../utils/appSlice"

const Button = ({ name, videoId }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        className="px-5 py-2 my-2 mx-1 bg-gray-200 rounded-lg hover:bg-black hover:text-white"
        onClick={() => {
          dispatch(changeCategory(videoId))
        }}
      >
        {name}
      </button>
    </div>
  )
}

export default Button
