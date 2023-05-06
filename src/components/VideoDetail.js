import React, { useState } from "react"
import TimeAgo from "react-timeago"
import Linkify from "react-linkify"
import { YouTube_LikedVideo } from "../utils/helper"

const VideoDetail = ({ detail }) => {
  const [show, setShow] = useState(false)
  const [subscribe, setSubscribe] = useState(false)
  const [save, setSave] = useState(false)

  const { snippet, statistics } = detail
  const { channelTitle, description, publishedAt, title } = snippet
  const { likeCount, viewCount, commentCount } = statistics
  return (
    <div className="py-3">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex py-3 justify-between">
        <div className="flex">
          <img
            className="h-12 rounded-full p-1"
            alt="channele_logo"
            src="https://yt3.ggpht.com/Oazw11tnwSahAg-Cvyttvs-Uee--0zrvCtKNWlmFAbPonkANkagjU7BlV9fA_mnlJvjLcD6cKw=s88-c-k-c0x00ffffff-no-rj"
          />
          <div>
            <h1 className="flex pl-2 font-semibold">{channelTitle}</h1>
            <h1 className="text-xs pl-2 font-medium text-slate-500">
              100K subscribers
            </h1>
          </div>
          <button
            className={
              subscribe
                ? "p-1 px-4 ml-7 h-10 bg-zinc-200 rounded-full font-semibold text-base"
                : "p-1 px-4 ml-7 h-10 bg-black hover:bg-gray-800 rounded-full font-semibold text-white text-base"
            }
            onClick={() => setSubscribe(!subscribe)}
          >
            {subscribe ? "Subscribed" : "Subscribe"}
          </button>
        </div>
        <div className="flex">
          <button className="p-1 px-4 ml-5 h-10 bg-zinc-200 hover:bg-zinc-300 rounded-full font-semibold text-base">
            {YouTube_LikedVideo}
            {Intl.NumberFormat("en", { notation: "compact" }).format(likeCount)}
          </button>

          <button className="p-1 px-4 ml-5 h-10 bg-zinc-200 hover:bg-zinc-300  rounded-full font-semibold text-base">
            Share
          </button>

          <button className="p-1 px-4 ml-5 h-10 bg-zinc-200 hover:bg-zinc-300  rounded-full font-semibold text-base">
            Clip
          </button>

          <button
            className="p-1 px-4 ml-5 h-10 bg-zinc-200 hover:bg-zinc-300  rounded-full font-semibold text-base"
            onClick={() => setSave(!save)}
          >
            {save ? "Saved" : "Save"}
          </button>

          <button className="p-4 ml-5 h-10 bg-zinc-200 hover:bg-zinc-300  rounded-full font-semibold text-base">
            ...
          </button>
        </div>
      </div>
      <div
        className={
          !show
            ? "bg-zinc-100 hover:bg-zinc-200 p-3 border rounded-xl w-full text-sm"
            : "bg-zinc-100 p-3 border rounded-xl w-full text-sm"
        }
      >
        <div className="flex font-bold text-slate-700 px-1 text-base">
          {Intl.NumberFormat("en", { notation: "compact" }).format(viewCount)}{" "}
          views
          <TimeAgo date={publishedAt} className="px-2" />
        </div>
        <Linkify
          componentDecorator={(href, text, key) => (
            <a
              className="text-blue-600 hover:text-blue-800"
              target="blank"
              href={href}
              key={key}
            >
              {text}
            </a>
          )}
        >
          <p className="p-1 pr-2 text-justify whitespace-pre-line">
            {show
              ? description + "\n\n"
              : description.substring(0, 160) + "... "}

            <button
              className="font-bold text-slate-700 text-base"
              onClick={() => setShow(!show)}
            >
              {show ? "Show less" : "Show more"}
            </button>
          </p>
        </Linkify>
      </div>
      <div className="pt-3 px-2 font-normal text-xl">
        {commentCount} Comments
      </div>
    </div>
  )
}

export default VideoDetail
