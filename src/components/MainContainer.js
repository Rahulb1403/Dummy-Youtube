import React, { useEffect } from "react"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"
import { useSelector } from "react-redux"

const MainContainer = () => {
  const menu = useSelector((store) => store.app.isMenuOpen)
  return (
    <div className={menu ? "flex flex-col w-5/6" : "flex flex-col w-full "}>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
