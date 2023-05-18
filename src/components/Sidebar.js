import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { SideBarTags } from "../utils/helper"

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  if (!isMenuOpen) {
    return null
  }

  return (
    <div className="p-2 w-52 shadow-lg">
      <ul>
        {SideBarTags.map((tag, i) => (
          <li
            className={
              tag.name === "Home"
                ? "bg-gray-200 font-bold rounded-md px-5 my-1"
                : "hover:bg-gray-200 rounded-md px-5 my-1"
            }
            key={i}
          >
            <Link to={tag.link} className="flex py-4">
              <span>{tag.svg}</span>
              <span className="px-4">{tag.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
