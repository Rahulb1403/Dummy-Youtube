import React from "react"

const ChatMessage = ({ name, message }) => {
  return (
    // <div className="flex">
    <div className="flex p-1">
      <img
        className="h-7"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bold pl-2">{name}</span>
      {name === "Rahul" && (
        <img
          className="h-6 w-6"
          src="https://img.icons8.com/color/48/null/verified-badge.png"
        />
      )}
      <div className="ml-3">
        <span>{message}</span>
      </div>
    </div>
    // </div>
  )
}

export default ChatMessage
