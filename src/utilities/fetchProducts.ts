import { productsApi } from "../store/apiSlice";
import { productStore } from "../store/productStore";
import { IProductToCreate } from "../types/interfaces";

// get all products
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

// get single product by id
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

// create a new product
export const createProduct = async (product: IProductToCreate) => {
	try {
		const result = await productStore.dispatch(
			productsApi.endpoints.createProduct.initiate(product)
		);
		console.log(result);
	} catch (error) {
		console.error(error);
	}
};
