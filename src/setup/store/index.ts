import homeSlice from "@/_slice/home.slice";
import newsEventsSlice from "@/_slice/news&events.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    NewsEvents: newsEventsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const { dispatch, getState } = store;
