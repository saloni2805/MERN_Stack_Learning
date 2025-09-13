import { configureStore } from "@reduxjs/toolkit"
import reducer from "../features/counterSlice"

export const store = configureStore({
  reducer: {
    counter: reducer,
  },
})
