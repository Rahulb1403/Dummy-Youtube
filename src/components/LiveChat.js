import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMessages } from "../utils/chatSlice"
import ChatMessage from "./ChatMessage"
import { generateRandomName, makeRandomMessage } from "../utils/helper"

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("")
  const dispatch = useDispatch()
  const chatMessage = useSelector((store) => store.chat.messages)
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      )
    }, 1500)

    return () => clearInterval(i)
  }, [])

  return (
    <>
      <div className="font-bold w-full p-3 pl-5 border border-black bg-slate-100 rounded-lg rounded-b-none">
        Live Chat
      </div>
      <div className="border border-y-0 border-black bg-slate-100 h-[500px] p-3 overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 pl-4 border border-t-0 border-black bg-slate-100 rounded-lg rounded-t-none"
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(
            addMessages({
              name: "Rahul Bansal",
              message: liveMessage,
            })
          )
          setLiveMessage("")
        }}
      >
        <input
          className="p-1 w-[280px] rounded-md border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value)
          }}
        />
        <button className="px-2 py-1 mx-2 bg-green-200 rounded-md">Send</button>
      </form>
    </>
  )
}

export default LiveChat