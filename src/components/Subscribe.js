import React from "react"
import { useSelector } from "react-redux"

const Subscribe = () => {
  const subscribe = useSelector((store) => store.record.subscribe)
  return (
    <div className="flex flex-wrap">
      {Object.keys(subscribe).length !== 0 ? (
        Object.keys(subscribe).map((key) => (
          <div className="p-4 m-2 w-60 h-min shadow-lg">
            <div className="flex justify-center">
              <img
                className="rounded-xl h-44 w-44"
                alt="thumbnail"
                src={subscribe[key].snippet.thumbnails.medium.url}
              />
            </div>
            <div className="pt-2 text-center">
              <h1 className="pl-2 text-2xl font-semibold">
                {subscribe[key].snippet.title}
              </h1>
              <h1 className="text-lg pl-2 font-medium text-slate-500">
                {Intl.NumberFormat("en", {
                  notation: "compact",
                  maximumSignificantDigits: 3,
                }).format(subscribe[key]?.statistics?.subscriberCount)}{" "}
                subscribers
              </h1>
            </div>
          </div>
        ))
      ) : (
        <p className="p-3 m-4 text-2xl">No Subscribed Channel Available</p>
      )}
    </div>
  )
}

export default Subscribe
