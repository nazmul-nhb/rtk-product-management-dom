import { displayAllProducts, displayLoading } from "../main";

const links = document.querySelectorAll(".route-link");

export const handleRoutes = (event: MouseEvent) => {
	event.preventDefault();
	const target = event.target as HTMLAnchorElement | null;

	if (target && target.href) {
		const href = target.getAttribute("href");

		if (href) {
			window.history.pushState({}, "", href);
			handleLocation();

			links.forEach((link) => {
				link.classList.remove("active");
				if (link.getAttribute("href") === href) {
					link.classList.add("active");
				}
			});
		}
	} else {
		console.error("Target Not Found!");
	}
};

const routes: { [key: string]: string } = {
	"/": "/home.html",
	"/cart": "/cart.html",
	"/about": "/about.html",
	404: "/404.html",
};

const pageTitles: { [key: string]: string } = {
	"/": "Home - RTK Product Management",
	"/cart": "Cart - RTK Product Management",
	"/about": "About Us - RTK Product Management",
	404: "Page Not Found - RTK Product Management",
};

export const handleLocation = async () => {
	const path = window.location.pathname;

	const route = routes[path] || routes[404];

	let main = document.getElementById("main");

	if (!main) {
		console.error("Main Element Not Found!");
		return;
	}

	try {
		displayLoading(true);
		const response = await fetch(route);
		const html = await response.text();

		if (main) {
			main.innerHTML = html;

			setupLinkListeners();

			document.title = pageTitles[path] || pageTitles[404];

			if (path === "/") {
				await displayAllProducts();
			}
		}
	} catch (error) {
		console.error("Failed to Load Route: ", error);
	} finally {
		displayLoading(false);
	}
};

export const setupLinkListeners = () => {
	if (links.length === 0) {
		console.warn("Link Not Found!");
	}

	const removeActiveClass = () => {
		links.forEach((link) => {
			link.classList.remove("active");
		});
	};

	const setActiveLink = () => {
		const currentPath = window.location.pathname;
		links.forEach((link) => {
			const href = link.getAttribute("href");
			if (href === currentPath) {
				link.classList.add("active");
			}
		});
	};

	setActiveLink();

	links.forEach((link) => {
		link.removeEventListener("click", (event) =>
			handleRoutes(event as MouseEvent)
		);
		link.addEventListener("click", (event) =>
			handleRoutes(event as MouseEvent)
		);

		removeActiveClass();
		setActiveLink();
	});
};
