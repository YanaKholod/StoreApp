import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./shopSlice";

// const rootReducer = combineReducers({
//   slice,
// }); //LEARN ABOUT IT
export const store = configureStore(slice);
