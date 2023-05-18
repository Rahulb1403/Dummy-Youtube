import React, { useState } from "react"
import TimeAgo from "react-timeago"
import Linkify from "react-linkify"
import {
  YOUTUBE_CLIP,
  YOUTUBE_MORE,
  YOUTUBE_SAVE,
  YOUTUBE_SHARE,
  YouTube_LikedVideo,
  YouTube_LikedVideoBlack,
} from "../utils/helper"
import { useDispatch, useSelector } from "react-redux"
import {
  SaveRecord,
  Subscribe,
  UnSaveRecord,
  UnSubscribe,
  liked,
  Unliked,
  history,
} from "../utils/recordSlice"

const VideoDetail = ({ detail, channel }) => {
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()
  dispatch(history({ [detail.id]: detail }))
  const saved = useSelector((store) => store.record.saved)
  const subscribe = useSelector((store) => store.record.subscribe)
  const like = useSelector((store) => store.record.like)

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
            src={channel?.snippet?.thumbnails?.default?.url}
          />
          <div>
            <h1 className="flex pl-2 font-semibold">{channelTitle}</h1>
            <h1 className="text-xs pl-2 font-medium text-slate-500">
              {Intl.NumberFormat("en", {
                notation: "compact",
                maximumSignificantDigits: 3,
              }).format(channel?.statistics?.subscriberCount)}{" "}
              subscribers
            </h1>
          </div>
          <button
            className={
              channel?.id in subscribe
                ? "p-1 px-4 ml-7 h-10 bg-zinc-200 rounded-full font-semibold text-base"
                : "p-1 px-4 ml-7 h-10 bg-black hover:bg-gray-800 rounded-full font-semibold text-white text-base"
            }
            onClick={() => {
              if (!(channel?.id in subscribe)) {
                dispatch(Subscribe({ [channel.id]: channel }))
              } else {
                dispatch(UnSubscribe(channel.id))
              }
            }}
          >
            {channel.id in subscribe ? "Subscribed" : "Subscribe"}
          </button>
        </div>
        <div className="flex">
          <button
            className="p-1 px-4  h-10  bg-zinc-200 hover:bg-zinc-300 rounded-full font-semibold text-base"
            onClick={() => {
              if (!(detail.id in like)) {
                dispatch(liked({ [detail.id]: detail }))
              } else {
                dispatch(Unliked(detail.id))
              }
            }}
          >
            <span className="flex">
              {detail.id in like ? YouTube_LikedVideoBlack : YouTube_LikedVideo}
              <span className="ml-2">
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  likeCount
                )}
              </span>
            </span>
          </button>

          <button className="p-1 px-4 ml-2 h-10 bg-zinc-200 hover:bg-zinc-300  rounded-full font-semibold text-base">
            <span className="flex">
              {YOUTUBE_SHARE}
              <span className="ml-2">Share</span>
            </span>
          </button>

          <button className="p-1 px-4 ml-2 h-10 bg-zinc-200 hover:bg-zinc-300  rounded-full font-semibold text-base">
            <span className="flex">
              {YOUTUBE_CLIP}
              <span className="ml-2">Clip</span>
            </span>
          </button>

          <button
            className="p-1 px-4 ml-2 h-10 bg-zinc-200 hover:bg-zinc-300  rounded-full font-semibold text-base"
            onClick={() => {
              if (!(detail.id in saved)) {
                dispatch(SaveRecord({ [detail.id]: detail }))
              } else {
                dispatch(UnSaveRecord(detail.id))
              }
            }}
          >
            <span className="flex">
              {YOUTUBE_SAVE}
              <span className="ml-2">
                {detail.id in saved ? "Saved" : "Save"}
              </span>
            </span>
          </button>

          <button className="p-1 px-2 ml-2 h-10 bg-zinc-200 hover:bg-zinc-300  rounded-full font-semibold text-base">
            <span className="flex items-center">{YOUTUBE_MORE}</span>
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
        {Intl.NumberFormat().format(commentCount)} Comments
      </div>
    </div>
  )
}

export default VideoDetail
