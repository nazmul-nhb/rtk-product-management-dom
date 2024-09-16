import { showProducts } from "../main";
import { deleteProductById } from "./fetchProducts";

export const handleDeleteProduct = async (id: string) => {
	try {
		console.log(`Deleting product with id: ${id}`);
		await deleteProductById(id);
		console.log("Product deleted successfully. Refreshing products...");
		await showProducts();
	} catch (error) {
		console.error(error);
	}
};


// const updatedProduct = {
// 	price: 77,
// };

// const newProduct: IProductToCreate = {
// 	title: "Abul",
// 	price: 99,
// 	productImage: "babul.com",
// };

// getProductById("66e86aa7bad83af3545f0615");

// createProduct(newProduct);

// updateProductById({ id: "66e1add143a224576183c2bb", updatedProduct });

// deleteProductById("66e1add143a224576183c2bb");