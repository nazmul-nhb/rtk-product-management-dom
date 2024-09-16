import "./style.css";
import { IProductToCreate } from "./types/interfaces";
import {
	createProduct,
	deleteProductById,
	getAllProducts,
	getProductById,
	updateProductById,
} from "./utilities/fetchProducts";

const updatedProduct = {
	price: 77,
};

const newProduct: IProductToCreate = {
	title: "Abul",
	price: 99,
	productImage: "babul.com",
};

getProductById("66e86aa7bad83af3545f0615");

createProduct(newProduct);

updateProductById({ id: "66e1add143a224576183c2bb", updatedProduct });

deleteProductById("66e1add143a224576183c2bb");

getAllProducts();
