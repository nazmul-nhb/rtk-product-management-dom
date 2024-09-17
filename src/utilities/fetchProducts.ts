import { displayAllProducts } from "../main";
import { productsApi } from "../store/apiSlice";
import { productStore } from "../store/productStore";
import { IProductToCreate, IProductToUpdate } from "../types/interfaces";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const { dispatch } = productStore;

const {
	getAllProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct,
} = productsApi.endpoints;

// get all products
export const getProducts = async () => {
	try {
		const result = await dispatch(
			getAllProducts.initiate(undefined, { forceRefetch: true })
		);

		if (result.data?.success) {
			console.log(result.data);
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
		const result = await dispatch(getProduct.initiate(id));

		if (result.data?.success) {
			console.log(result.data);
			return result.data?.product;
		} else if (result.error) {
			console.error(result.error);
		}
	} catch (error) {
		console.error(error);
	}
};

// create a new product
export const createNewProduct = async (product: IProductToCreate) => {
	try {
		const result = await dispatch(createProduct.initiate(product));

		if (result.data?.success) {
			console.log(result.data);
			await displayAllProducts();
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
		const result = await dispatch(updateProduct.initiate(product));

		if (result.data?.success) {
			console.log(result.data);
			await displayAllProducts();
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
		const result = await dispatch(deleteProduct.initiate(id));

		if (result.data?.success) {
			toastr.success(result.data?.message);
		} else if (result.error) {
            console.error(result.error);
            toastr.error("Could Not Delete!")
		}
	} catch (error) {
		console.error(error);
	}
};
