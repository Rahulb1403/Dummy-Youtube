var nameList = [
  "Akhil",
  "Nitish",
  "Bhavy",
  "Dheeraj",
  "Raman",
  "Parmeet",
  "Aman",
  "Sumit",
  "Himanshu",
  "Manish",
  "Rohit",
  "Vineet",
  "Mishra",
]

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)]
}

export function makeRandomMessage() {
  const message = [
    "I don't work in an office",
    "Full time student and rockin it!",
    "I am a traveler",
    "Inner and outer peace",
    "A compassionate world",
    "Personal growth",
    "Finding true love",
    "Understanding other people",
    "I am a bit of a bright spark",
    "I am a survivor - Strength",
    "I know what I want - Confidence",
    "I like to make my friends laugh",
    "They always come to me for advice",
    "I offer support where I can",
    "Help me to fix this",
    "Thanks Akhil",
    "Thanks Nitish",
    "Thanks Bhavy",
    "Thanks Dheeraj",
    "Thanks Raman",
    "Thanks Parmeet",
    "Thanks Aman",
    "Thanks Sumit",
    "Thanks Himanshu",
    "Thanks Manish",
    "Thanks Rohit",
    "Thanks Vineet",
    "Thanks Mishra",
    "Hi",
    "Hi All",
    "Hello 👋",
    "😂😂😂",
    "🤣",
    "😎",
    "😮",
    "😂",
    "😑",
    "Are you serious right now?",
    "Fitness is life!",
    "It looked like fun",
    "I was bored",
  ]

  return message[Math.floor(Math.random() * message.length)]
}

export const YouTube_Shots = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
  </svg>
)

export const YouTube_Home = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"></path>
  </svg>
)

export const YouTube_Subscriptions = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
  </svg>
)

export const YouTube_Library = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
  </svg>
)

export const YouTube_History = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path>
  </svg>
)

export const YouTube_YourVideo = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"></path>
  </svg>
)

export const YouTube_WatchLater = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path>
  </svg>
)

export const YouTube_LikedVideo = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
  </svg>
)

export const YouTube_LikedVideoBlack = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M 18.77 11 h -4.23 l 1.52 -4.94 C 16.38 5.03 15.54 4 14.38 4 c -0.58 0 -1.14 0.24 -1.52 0.65 l -5.86 6.35 H 6 v 10 h 4 h 1 H 17.43 C 18.49 21 19.41 20.33 19.62 19.39 L 20.96 13.39 C 21.23 12.15 20.18 11 18.77 11 z m -13.77 10 h -3 v -10 h 3 z z"></path>
  </svg>
)

export const YOUTUBE_CLIP = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z"></path>
  </svg>
)

export const YOUTUBE_SHARE = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"></path>
  </svg>
)

export const YOUTUBE_SAVE = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"></path>
  </svg>
)

export const YOUTUBE_MORE = (
  <svg viewBox="0 0 24 24" focusable="false" width="25px" height="25px">
    <path d="M7.5,12c0,0.83-0.67,1.5-1.5,1.5S4.5,12.83,4.5,12s0.67-1.5,1.5-1.5S7.5,11.17,7.5,12z M12,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,10.5,12,10.5z M18,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S18.83,10.5,18,10.5z"></path>
  </svg>
)

export const YOUTUBE_SEND = (
  <svg height="35px" viewBox="0 0 24 24" width="35px" focusable="false">
    <path
      d="M5,12L3,3l19,9L3,21L5,12z M5.82,12.93L17,12L5.82,11.07l-1.4-6.29L19.66,12 L4.42,19.22L5.82,12.93z"
      fill-rule="evenodd"
    ></path>
  </svg>
)

export const YOUTUBE_RIGHT = (
  <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
    <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
  </svg>
)

export const YOUTUBE_LEFT = (
  <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
    <path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z"></path>
  </svg>
)

export const SideBarTags = [
  {
    name: "Home",
    svg: YouTube_Home,
    link: "/",
  },
  {
    name: "Shorts",
    svg: YouTube_Shots,
    link: "/",
  },
  {
    name: "Subscriptions",
    svg: YouTube_Subscriptions,
    link: "/subscribe",
  },
  {
    name: "History",
    svg: YouTube_History,
    link: "/history",
  },
  {
    name: "Your Video",
    svg: YouTube_YourVideo,
    link: "/saved",
  },
  {
    name: "Liked Video",
    svg: YouTube_LikedVideo,
    link: "/likedVideos",
  },
  {
    name: "Watch later",
    svg: YouTube_WatchLater,
    link: "/saved",
  },
  {
    name: "Library",
    svg: YouTube_Library,
    link: "/",
  },
]
