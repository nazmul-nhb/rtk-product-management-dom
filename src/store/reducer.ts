import { combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./apiSlice";

export const reducer = combineReducers({
	[productsApi.reducerPath]: productsApi.reducer,
});
