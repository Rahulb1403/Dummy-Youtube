import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    videoCategory: 0,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    clearToggle: (state) => {
      state.isMenuOpen = false
    },
    OpenMenu: (state) => {
      state.isMenuOpen = true
    },
    changeCategory: (state, action) => {
      state.videoCategory = action.payload
    },
  },
})

export const { toggleMenu, clearToggle, OpenMenu, changeCategory } =
  appSlice.actions
export default appSlice.reducer
