import React, { useRef, useState } from "react"
import Button from "./Button"
import { buttons } from "../utils/constant"
import { YOUTUBE_LEFT, YOUTUBE_RIGHT } from "../utils/helper"

const ButtonList = () => {
  const [show, setShow] = useState(false)
  const containerRef = useRef(0)

  const scroll = (scrollOffset) => {
    containerRef.current.scrollLeft += scrollOffset
  }

  return (
    <div className="m-2 flex justify-center">
      {show && (
        <button
          className="m-2 py-1 px-2 bg-gray-200 rounded-full mr-1"
          onClick={() => {
            scroll(-450)
            setShow(false)
          }}
        >
          {YOUTUBE_LEFT}
        </button>
      )}
      <div
        className="flex overflow-x-auto scrollbar-hide scroll-smooth"
        ref={containerRef}
      >
        {buttons.map((list, i) => (
          <Button key={i} name={list.name} videoId={list.videoCategoryId} />
        ))}
      </div>
      <button
        className="m-2 py-1 px-2 bg-gray-200 rounded-full ml-1"
        onClick={() => {
          scroll(350)
          setShow(true)
        }}
      >
        {YOUTUBE_RIGHT}
      </button>
    </div>
  )
}
// }

export default ButtonList
