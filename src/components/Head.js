import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { OpenMenu, toggleMenu } from "../utils/appSlice"
import { Link } from "react-router-dom"
import { YOUTUBE_SEARCH_API } from "../utils/constant"
import { cacheResults } from "../utils/searchSlice"

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestion] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)

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
    <div className="grid grid-flow-col px-2 pt-2 pb-4 mx-2 my-1 shadow-md items-center">
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
            className="h-8 ml-2"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </Link>
      </div>

      <div className="col-span-10 px-10 items-center">
        <div className="flex flex-wrap">
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            // onBlur={() => setShowSuggestion(false)}
          />
          <Link to={searchQuery && "/result?search_query=" + searchQuery}>
            <button
              className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
              onClick={() => setShowSuggestion(false)}
            >
              <svg viewBox="0 0 50 50" width="25px" height="25px">
                <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z" />
              </svg>
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
                    className="py-1 px-3 hover:bg-gray-100 rounded-md"
                    onClick={() => {
                      setSearchQuery(suggest)
                      setShowSuggestion(false)
                    }}
                  >
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
