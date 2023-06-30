export const themePreference = (themeModeName: string): void => {
	const doc = document.documentElement;

	if (
		localStorage.getItem(themeModeName) === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		doc.setAttribute("data-theme", "light");
		doc.classList.add("light");
		doc.classList.remove("dark");
	} else {
		doc.setAttribute("data-theme", "dark");
		doc.classList.add("dark");
		doc.classList.remove("light");
	}
};
