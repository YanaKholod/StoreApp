import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newClothes } from "../utils/mockData";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async (args, { getState }) => {
    const { queryParams } = getState();
    const response = await fetch(
      `https://fakestoreapi.com/products${queryParams}`
    );
    const data = await response.json();
    return data;
  }
);
export const fetchNewClothes = createAsyncThunk(
  "catalog/fetchNewClothes",
  async () => {
    const response = new Promise((resolve, reject) => {
      resolve(newClothes);
      reject(new Error("ERROR"));
    });
    const data = await response;
    return data;
  }
);

export const slice = createSlice({
  name: "catalogSlice",
  initialState: {
    catalog: [],
    basket: [],
    newClothes: [],
    queryParams: "",
    status: null,
    error: null,
  },
  reducers: {
    addItemToBasket(state, action) {
      const position = state.basket
        .map((item) => item.id)
        .indexOf(action.payload.id);
      if (position !== -1) {
        state.basket[position] = {
          ...action.payload,
          count: state.basket[position].count + 1,
        };
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
    },
    removeItemFromBasket(state, action) {
      state.basket.splice(action.payload, 1);
    },
    deleteOneItemFromBasket(state, action) {
      const position = state.basket
        .map((item) => item.id)
        .indexOf(action.payload.id);

      if (state.basket[position].count !== 1) {
        state.basket[position].count -= 1;
      }
    },
    setQueryParams(state, action) {
      state.queryParams = action.payload;
    },
  },
  extraReducers: {
    [fetchCatalog.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCatalog.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.catalog = action.payload;
    },
    [fetchCatalog.rejected]: (state, action) => {},
    [fetchNewClothes.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchNewClothes.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.newClothes = action.payload;
    },
    [fetchNewClothes.rejected]: (state, action) => {},
  },
});

export default slice.reducer;

export const {
  getCatalog,
  addItemToBasket,
  removeItemFromBasket,
  setQueryParams,
  deleteOneItemFromBasket,
} = slice.actions;
