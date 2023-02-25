import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async function () {
    // const state = getState();
    // console.log("state", state);
    // const params = state.queryParams;
    // console.log("para", params);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);
// export const fetchCatalogItem = createAsyncThunk(
//   "item/fetchCatalogItem",
//   async function (id) {
//     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//     const data = await response.json();
//     return data;
//   }
// );
// export const fetchCatalogByCategory = createAsyncThunk(
//   "catalog/categoryCatalog",
//   async function (category) {
//     const response = await fetch(
//       "https://fakestoreapi.com/products/" + category
//     );
//     const data = await response.json();
//     return data;
//   }
// );
export const slice = createSlice({
  name: "catalogSlice",
  initialState: {
    catalog: [],
    basket: [],
    queryParams: "",
    status: null,
    error: null,
  },
  reducers: {
    addItemToBasket(state, action) {
      state.basket.push(action.payload);
    },
    removeItemFromBasket(state, action) {
      state.basket.splice(action.payload, 1);
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
    // [fetchCatalogItem.pending]: (state) => {
    //   state.status = "loading";
    //   state.error = null;
    // },
    // [fetchCatalogItem.fulfilled]: (state, action) => {
    //   state.status = "resolved";
    //   const itemAlreadyExist = state.itemCard.filter(
    //     (item) => +item.id === +action.payload.id
    //   );
    //   if (!itemAlreadyExist.length) {
    //     state.itemCard.push(action.payload);
    //   }
    // },
    // [fetchCatalog.rejected]: (state, action) => {},
  },
});

export default slice.reducer;

export const { getCatalog, addItemToBasket, removeItemFromBasket } =
  slice.actions;
