import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxBodyType } from "./type";
import { CompaniesProps } from "@/services/servers/type";

const initialState: ReduxBodyType = {
  allCompanies: [],
  popularCompanies: [],
};

const setAllCompanies = (
  state: ReduxBodyType,
  action: PayloadAction<CompaniesProps[]>
) => {
  state.allCompanies = action.payload;
  state.popularCompanies = state.allCompanies.filter(
    (item) => item.rating === 5
  );
};

export const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: { setAllCompanies },
});

const { actions } = homeSlice;

export const {
  setAllCompanies: setAllCompaniesAction,
} = actions;

export default homeSlice.reducer;
