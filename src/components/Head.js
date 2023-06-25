import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { OpenMenu, toggleMenu } from "../utils/appSlice"
import { Link } from "react-router-dom"
import { YOUTUBE_SEARCH_API } from "../utils/constant"
import { cacheResults } from "../utils/searchSlice"
import { YOUTUBE_SEARCH_ICON } from "../utils/helper"

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestion] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [showIcon, setShowIcon] = useState(false)

  const SearchCache = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (SearchCache[searchQuery]) {
        setSuggestion(SearchCache[searchQuery])
      } else {
        getSuggestion()
      }
    }, 200)
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  const getSuggestion = async () => {
    console.log("Search api")
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    setSuggestion(json[1])

    //It will update the cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    )
  }

  const toggleHandler = () => {
    dispatch(toggleMenu())
  }
  const sidebarHandler = () => {
    dispatch(OpenMenu())
  }

  return (
    <div className="grid grid-flow-col px-2 pt-2 pb-4 w-full mx-2 my-1 shadow-md items-center">
      <div className="flex col-span-1">
        <img
          onClick={toggleHandler}
          className="h-8 px-3"
          alt="menu"
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
        />
        <Link to="/">
          <img
            onClick={sidebarHandler}
            className="h-8 px-2"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </Link>
      </div>

      <div className="col-span-10 px-10 items-center">
        <div className="flex flex-wrap">
          {showIcon && (
            <span className="py-2 absolute pl-3">{YOUTUBE_SEARCH_ICON}</span>
          )}
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full focus:pl-[50px]"
            type="text"
            value={searchQuery}
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestion(true)
              setShowIcon(true)
            }}
            onBlur={() => {
              setShowIcon(false)
              // setShowSuggestion(false)
            }}
          />
          <Link to={searchQuery && "/result?search_query=" + searchQuery}>
            <button
              className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
              onClick={() => setShowSuggestion(false)}
            >
              {YOUTUBE_SEARCH_ICON}
            </button>
          </Link>
        </div>

        {showSuggestion && (
          <div className="absolute bg-white py-2 px-3 w-1/3 shadow-lg rounded-lg broder border-gray-100 z-10">
            <ul>
              {suggestion.map((suggest) => (
                <Link key={suggest} to={"/result?search_query=" + suggest}>
                  <li
                    key={suggest}
                    className="py-1 px-1 hover:bg-gray-100 rounded-md flex"
                    onClick={() => {
                      setSearchQuery(suggest)
                      setShowSuggestion(false)
                    }}
                  >
                    <span className="pr-3">{YOUTUBE_SEARCH_ICON}</span>
                    {suggest}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  )
}

export default Head
