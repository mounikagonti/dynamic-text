import {configureStore} from '@reduxjs/toolkit'
import textBoxReducer from './textBoxSlice'

export const store = configureStore({
  reducer: {
    textBoxes: textBoxReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
