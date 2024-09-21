import { dispatch } from "@/setup/store";
import {
  setAllCompaniesAction
} from "@/_slice/home.slice";
import { Companies } from "./mock";

export const getHomePageData = async () => {
  dispatch(setAllCompaniesAction(Companies));
};

export const initializeAppData = () => {
  getHomePageData();
};
