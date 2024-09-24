import { dispatch } from "@/setup/store";
import {
  setAllCompaniesAction,
  setLatestNewsAction,
} from "@/_slice/home.slice";
import { Companies, LatestNews } from "./mock";

export const getHomePageData = async () => {
  dispatch(setAllCompaniesAction(Companies));
  dispatch(setLatestNewsAction(LatestNews));
};

export const initializeAppData = () => {
  getHomePageData();
};
