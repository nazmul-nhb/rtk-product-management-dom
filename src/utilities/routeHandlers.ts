export const handleRoutes = (event: MouseEvent) => {
	event.preventDefault();
	const target = event.target as HTMLAnchorElement | null;

	if (target && target.href) {
		const href = target.getAttribute("href");

		if (href) {
			window.history.pushState({}, "", href);
			handleLocation();
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
		const response = await fetch(route);
		const html = await response.text();

		if (main) {
			main.innerHTML = html;

			setupLinkListeners();

			document.title = pageTitles[path] || pageTitles[404];
		}
	} catch (error) {
		console.error("Failed to Load Route: ", error);
	}
};

export const setupLinkListeners = () => {
	const links = document.querySelectorAll(".route-link");
	if (links.length === 0) {
		console.warn("Link Not Found!");
	}
	links.forEach((link) => {
		link.addEventListener("click", (event) =>
			handleRoutes(event as MouseEvent)
		);
	});
};
