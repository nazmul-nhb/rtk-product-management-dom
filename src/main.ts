import "./style.css";
import { IPQueryResponse } from "./types/interfaces";
// import { IProductToCreate } from "./types/interfaces";
import {
	// createProduct,
	// deleteProductById,
	getAllProducts,
	getProductById,
	// updateProductById,
} from "./utilities/fetchProducts";

// const updatedProduct = {
// 	price: 77,
// };

// const newProduct: IProductToCreate = {
// 	title: "Abul",
// 	price: 99,
// 	productImage: "babul.com",
// };

getProductById("66e86aa7bad83af3545f0615");

// createProduct(newProduct);

// updateProductById({ id: "66e1add143a224576183c2bb", updatedProduct });

// deleteProductById("66e1add143a224576183c2bb");

const showProducts = async () => {
	const { products } = (await getAllProducts()) as IPQueryResponse;

	const productsGrid = document.getElementById("products");

	products.forEach((product) => {
		const { title, productImage, productId, price } = product;
		const productCard = document.createElement("div");

		productCard.innerHTML = `
      <div title="${title}" class="space-y-2">
       <figure class="relative border p-1 aspect-square">
        <img src="${productImage}" alt="${title}" />
        <figcaption
          class="line-clamp-1 overflow-ellipsis"
          title="${title}"
        >
          ${title}
        </figcaption>
        <span class="text-xs">${productId}</span>
        <span class="absolute top-1 right-1 text-transparent font-bold text-xl bg-clip-text bg-gradient-to-r from-red-600 to-lime-900 backdrop-filter">
          ${price}
        </span>
      </figure>
    </div>`;
		productsGrid?.appendChild(productCard);
	});
};

showProducts();
