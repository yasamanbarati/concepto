import homeSlice from "@/_slice/home.slice";
import newsEventsSlice from "@/_slice/news&events.slice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  home: homeSlice,
  NewsEvents: newsEventsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
