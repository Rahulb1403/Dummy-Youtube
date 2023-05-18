import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice"
import recordSlice from "./recordSlice"

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    record: recordSlice,
  },
})

export default store
