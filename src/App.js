import "./App.css"
import Body from "./components/Body"
import { Provider } from "react-redux"
import store from "./utils/Store"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage.js"
import SearchVideo from "./components/SearchVideo"
import History from "./components/History.js"
import LikeVideos from "./components/LikedVideos"
import Subscribe from "./components/Subscribe"
import SavedVideos from "./components/SavedVideos"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "result",
        element: <SearchVideo />,
      },
      {
        path: "subscribe",
        element: <Subscribe />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "saved",
        element: <SavedVideos />,
      },
      {
        path: "likedVideos",
        element: <LikeVideos />,
      },
    ],
  },
])
function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App
