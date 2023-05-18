import { createSlice } from "@reduxjs/toolkit"

const recordSlice = createSlice({
  name: "record",
  initialState: {
    saved: {},
    subscribe: {},
    like: {},
    history: {},
  },
  reducers: {
    SaveRecord: (state, action) => {
      state.saved = Object.assign(state.saved, action.payload)
    },
    UnSaveRecord: (state, action) => {
      Reflect.deleteProperty(state.saved, action.payload)
    },

    Subscribe: (state, action) => {
      state.subscribe = Object.assign(state.subscribe, action.payload)
    },

    UnSubscribe: (state, action) => {
      Reflect.deleteProperty(state.subscribe, action.payload)
    },

    liked: (state, action) => {
      state.like = Object.assign(state.like, action.payload)
    },

    Unliked: (state, action) => {
      Reflect.deleteProperty(state.like, action.payload)
    },

    history: (state, action) => {
      state.history = Object.assign(state.history, action.payload)
    },
  },
})

export const {
  SaveRecord,
  UnSaveRecord,
  Subscribe,
  UnSubscribe,
  liked,
  Unliked,
  history,
} = recordSlice.actions

export default recordSlice.reducer
