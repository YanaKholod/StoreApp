import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./shopSlice";

export const store = configureStore(slice);
