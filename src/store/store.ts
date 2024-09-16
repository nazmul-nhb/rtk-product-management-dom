import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { productsApi } from "./apiSlice";

export default function () {
	return configureStore({
		reducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(productsApi.middleware),
	});
}
