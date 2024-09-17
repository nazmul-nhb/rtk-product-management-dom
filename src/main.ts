import "./style.css";
import { IPQueryResponse } from "./types/interfaces";
import { deleteProductById, getAllProducts } from "./utilities/fetchProducts";

export const displayAllProducts = async () => {
	try {
		const { products, totalProducts } =
			((await getAllProducts()) as IPQueryResponse) || {};

		const navTotal = document.getElementById("total-products");

		const productCount = document.createElement("sup");
		productCount.innerText = `${totalProducts || 0}`;

		navTotal?.appendChild(productCount);

		if (products) {
			const productsGrid = document.getElementById("products");

			if (productsGrid) {
				productsGrid.innerHTML = "";

				const fragment = document.createDocumentFragment();

				products.forEach((product) => {
					const { _id, title, productImage, productId, price } =
						product;
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

					fragment.appendChild(productCard);

					productsGrid?.appendChild(productCard);

					const deleteButton = document.getElementById(
						`delete-btn-${_id}`
					);

					deleteButton?.addEventListener("click", async () => {
						await deleteProductById(_id);
					});
				});

				productsGrid.appendChild(fragment);
			}
		}
	} catch (error) {
		console.error(error);
	}
};

(async () => {
	try {
		await displayAllProducts();
	} catch (error) {
		console.error(error);
	}
})();
