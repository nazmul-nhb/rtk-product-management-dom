import "./style.css";
import { IPQueryResponse } from "./types/interfaces";
// import { IProductToCreate } from "./types/interfaces";
import { getAllProducts } from "./utilities/fetchProducts";
import { handleDeleteProduct } from "./utilities/handlers";

export const showProducts = async () => {
	const { products } = ((await getAllProducts()) as IPQueryResponse) || {};

	if (products) {
		const productsGrid = document.getElementById("products");
		if (productsGrid) {
			productsGrid.innerHTML = "";
			products.forEach((product) => {
				const { _id, title, productImage, productId, price } = product;
				const productCard = document.createElement("div");

				productCard.innerHTML = `
    <div class="flex flex-col items-center justify-center gap-1 border px-3 py-2">
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
      </div>
       <div class="w-full flex items-center flex-wrap justify-around gap-3 mt-2">
     
      <button
        id="delete-btn-${_id}"
        class="border border-red-800 text-red-800 hover:bg-red-800 hover:text-white transition-all duration-500 font-semibold px-3 py-1"
      >
        Delete
      </button>
     
    </div>
   
    </div>`;
				productsGrid?.appendChild(productCard);
				const deleteButton = document.getElementById(
					`delete-btn-${_id}`
				);
				if (deleteButton) {
					deleteButton.addEventListener("click", () =>
						handleDeleteProduct(_id)
					);
				}
			});
		}
	}
};

showProducts();
