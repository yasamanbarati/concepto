import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxBodyType } from "./type";
import { CompaniesProps, LatestNewsProps } from "@/services/servers/type";

const initialState: ReduxBodyType = {
  allCompanies: [],
  popularCompanies: [],
  jobOpportunity: [],
  latestNews: [],
};

const setAllCompanies = (
  state: ReduxBodyType,
  action: PayloadAction<CompaniesProps[]>
) => {
  state.allCompanies = action.payload;
  state.popularCompanies = state.allCompanies.filter(
    (item) => item.rating === 5
  );

  state.jobOpportunity = state.allCompanies.filter(
    (item) => item.job_opportunity !== undefined && item.job_opportunity > 0
  );
};

const setLatestNews = (
  state: ReduxBodyType,
  action: PayloadAction<LatestNewsProps[]>
) => {
  state.latestNews = action.payload;
};

export const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: { setAllCompanies, setLatestNews },
});

const { actions } = homeSlice;

export const {
  setAllCompanies: setAllCompaniesAction,
  setLatestNews: setLatestNewsAction,
} = actions;

export default homeSlice.reducer;
