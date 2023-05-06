import React from "react"
import Button from "./Button"

import { buttons } from "../utils/constant"

const ButtonList = () => {
  return (
    <div className="overflow-y-auto flex flex-wrap scrollbar-hide scroll-smooth">
      {/* <button>{"<"}</button> */}
      {buttons.map((list, i) => (
        <Button key={i} name={list.name} videoId={list.videoCategoryId} />
      ))}
      {/* <button>{">"}</button> */}
    </div>
  )
}

export default ButtonList
