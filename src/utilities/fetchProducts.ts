import { productsApi } from "../store/apiSlice";
import { productStore } from "../store/productStore";
import { IProductToCreate, IProductToUpdate } from "../types/interfaces";

// get all products
export const getAllProducts = async () => {
	try {
		const result = await productStore.dispatch(
			productsApi.endpoints.getAllProducts.initiate()
		);
	
        if (result.data) {
			return result.data;
		} else if (result.error) {
			console.error(result.error);
		}
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

		if (result.data) {
			console.log(result.data?.product);
		} else if (result.error) {
			console.error(result.error);
		}
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

		if (result.data) {
			return result.data;
		} else if (result.error) {
			console.error(result.error);
		}
	} catch (error) {
		console.error(error);
	}
};

// update a product by id
export const updateProductById = async (product: IProductToUpdate) => {
	try {
		const result = await productStore.dispatch(
			productsApi.endpoints.updateProduct.initiate(product)
		);

		if (result.data) {
			console.log(result.data);
		} else if (result.error) {
			console.error(result.error);
		}
	} catch (error) {
		console.error(error);
	}
};

// delete a product by id
export const deleteProductById = async (id: string) => {
	try {
		const result = await productStore.dispatch(
			productsApi.endpoints.deleteProduct.initiate(id)
		);
		if (result.data) {
			console.log(result.data);
		} else if (result.error) {
			console.error(result.error);
		}
	} catch (error) {
		console.error(error);
	}
};
