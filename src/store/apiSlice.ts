import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { IPQueryResponse } from "../types/interfaces";

const baseUrl = "https://rtk-product-management-server.vercel.app/";

const baseQuery = fetchBaseQuery({ baseUrl });

const url = "products";

// Define the API
export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery,
	tagTypes: ["ProductList", "Product"],
	endpoints: (builder) => ({
		// get all products
		getAllProducts: builder.query<IPQueryResponse, void>({
			query: () => url,
			providesTags: ["ProductList"],
		}),
	}),
});
