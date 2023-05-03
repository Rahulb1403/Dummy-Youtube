import React from "react"

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-sm rounded-sm">
      <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bold pl-2">{name}</span>
      {name === "Rahul Bansal" && (
        <img
          className="h-6 w-6"
          src="https://img.icons8.com/color/48/null/verified-badge.png"
        />
      )}
      <span className="pl-2">{message}</span>
    </div>
  )
}

export default ChatMessage
