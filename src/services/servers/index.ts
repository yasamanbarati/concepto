import { dispatch } from "@/setup/store";
import {
  setAllCompaniesAction,
  setLatestNewsAction,
} from "@/_slice/home.slice";
import { Companies, ImportantNews, LatestNews, News } from "./mock";
import {
  setImportantNewsAction,
  setNewsAction,
} from "@/_slice/news&events.slice";

export const getHomePageData = async () => {
  dispatch(setAllCompaniesAction(Companies));
  dispatch(setLatestNewsAction(LatestNews));
  dispatch(setImportantNewsAction(ImportantNews));
  dispatch(setNewsAction(News));
};

export const initializeAppData = () => {
  getHomePageData();
};
