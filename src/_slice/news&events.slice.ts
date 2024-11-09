import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsEventBodyType } from "./type";
import { ImportantNewsProps } from "@/services/servers/type";

const initialState: NewsEventBodyType = {
  ImportantNews: [],
  News: [],
};

const setImportantNews = (
  state: NewsEventBodyType,
  action: PayloadAction<ImportantNewsProps[]>
) => {
  state.ImportantNews = action.payload;
};
const setNews = (
  state: NewsEventBodyType,
  action: PayloadAction<ImportantNewsProps[]>
) => {
  state.News = action.payload;
};

export const NewsEventsSlice = createSlice({
  name: "NewsEvents",
  initialState: initialState,
  reducers: { setImportantNews, setNews },
});

const { actions } = NewsEventsSlice;

export const {
  setImportantNews: setImportantNewsAction,
  setNews: setNewsAction,
} = actions;

export default NewsEventsSlice.reducer;
