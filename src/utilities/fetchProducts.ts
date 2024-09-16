import { productsApi } from "../store/apiSlice";
import { productStore } from "../store/productStore";

export const getAllProducts = async () => {
	try {
		const result = await productStore.dispatch(
			productsApi.endpoints.getAllProducts.initiate()
		);
		console.log(result.data?.products);
	} catch (error) {
		console.error(error);
	}
};

export const getProductById = async (id: string) => {
	try {
		const result = await productStore.dispatch(
			productsApi.endpoints.getProduct.initiate(id)
		);
		console.log(result.data?.product);
	} catch (error) {
		console.error(error);
	}
};
