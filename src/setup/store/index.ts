import homeSlice from "@/_slice/home.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    home: homeSlice
  },
});
export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch; 
export const { dispatch, getState } = store;
