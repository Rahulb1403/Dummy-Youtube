import React from "react"
import Button from "./Button"

import { buttons } from "../utils/constant"

const ButtonList = () => {
  return (
    <div className="flex">
      {buttons.map((list, i) => (
        <Button key={i} name={list.name} videoId={list.videoCategoryId} />
      ))}
    </div>
  )
}

export default ButtonList
