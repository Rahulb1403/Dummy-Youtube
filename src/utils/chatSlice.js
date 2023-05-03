import { createSlice } from "@reduxjs/toolkit"
import { LIVE_CHAT_COUNT } from "./constant"

const chatSlice = createSlice({
  name: "Chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1)
      state.messages.unshift(action.payload)
    },
    resetMessages: (state) => {
      state.messages = []
    },
  },
})

export const { addMessages, resetMessages } = chatSlice.actions
export default chatSlice.reducer
