import "./style.css";
import { productStore } from "./store/productStore";
import { productsApi } from "./store/apiSlice";

const getAllProducts = async () => {
	try {
		const result = await productStore.dispatch(
			productsApi.endpoints.getAllProducts.initiate()
		);
		console.log(result.data);
	} catch (error) {
		console.error(error);
	}
};

getAllProducts();
