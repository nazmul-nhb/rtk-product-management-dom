import "./style.css";
import {
	createProduct,
	getAllProducts,
	getProductById,
	updateProductById,
} from "./utilities/fetchProducts";

const updatedProduct = {
	price: 77,
};

getAllProducts();

getProductById("66e1add143a224576183c2bb");

// createProduct(newProduct);

updateProductById({ id: "66e1add143a224576183c2bb", updatedProduct });
