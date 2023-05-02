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
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleHandler}
          className="h-8"
          alt="menu"
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
        />
        <Link to="/">
          <img
            onClick={sidebarHandler}
            className="h-8 mx-2"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </Link>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            // onBlur={() => setShowSuggestion(false)}
          />
          <Link to={searchQuery && "/result?search_query=" + searchQuery}>
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
              🔍
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
