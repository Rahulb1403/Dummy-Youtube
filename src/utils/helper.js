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

export const SideBarTags = [
  {
    name: "Home",
    svg: YouTube_Home,
  },
  {
    name: "Shorts",
    svg: YouTube_Shots,
  },
  {
    name: "Subscriptions",
    svg: YouTube_Subscriptions,
  },
  {
    name: "Library",
    svg: YouTube_Library,
  },
  {
    name: "History",
    svg: YouTube_History,
  },
  {
    name: "Your Video",
    svg: YouTube_YourVideo,
  },
  {
    name: "Watch later",
    svg: YouTube_WatchLater,
  },
  {
    name: "Liked Video",
    svg: YouTube_LikedVideo,
  },
]
