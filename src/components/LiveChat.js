import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMessages } from "../utils/chatSlice"
import ChatMessage from "./ChatMessage"
import {
  YOUTUBE_SEND,
  generateRandomName,
  makeRandomMessage,
} from "../utils/helper"

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("")
  const dispatch = useDispatch()
  const chatMessage = useSelector((store) => store.chat.messages)
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessage(),
        })
      )
    }, 1500)

    return () => clearInterval(i)
  }, [])

  return (
    <>
      <div className="font-bold w-full p-3 pl-5 border-2 border-gray-200 rounded-lg rounded-b-none">
        Live Chat
      </div>
      <div className="border-2 border-y-0 border-gray-200 h-[495px] p-3 overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 pl-4 border-2 border-gray-200 rounded-lg rounded-t-none flex flex-wrap"
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(
            addMessages({
              name: "Rahul",
              message: liveMessage,
            })
          )
          setLiveMessage("")
        }}
      >
        <input
          className="p-1 pl-3 w-10/12 rounded-full border border-gray-300"
          placeholder="Say something..."
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value)
          }}
          required
        />
        <button className="w-1/12 mx-2">{YOUTUBE_SEND}</button>
      </form>
    </>
  )
}

export default LiveChat
