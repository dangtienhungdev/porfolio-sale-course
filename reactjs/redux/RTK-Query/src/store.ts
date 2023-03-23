import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {}
})

/* lấy rootstate và appDispatch từ store */
export type RootState = ReturnType<typeof store.getState>
export type AppDipatch = typeof store.dispatch
