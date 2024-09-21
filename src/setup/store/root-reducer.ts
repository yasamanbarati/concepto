import homeSlice from "@/_slice/home.slice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  home: homeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
