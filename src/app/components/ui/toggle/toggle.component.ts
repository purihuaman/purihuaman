import { Component } from "@angular/core";
import { themePreference } from "./theme";

@Component({
	selector: "app-toggle",
	templateUrl: "./toggle.component.html",
	styleUrls: ["./toggle.component.scss"],
})
export class ToggleComponent {
	isDarkTheme: boolean = false;
	dataTheme: string | null = "light";
	classTheme: string | null = "light";

	attribute: string = "data-theme";
	classe: string = "class";
	private THEME_MODE_NAME: string = "theme-puri";

	htmlDoc = document.querySelector("html") as HTMLHtmlElement;

	ngOnInit(): void {
		this.dataTheme = this.htmlDoc.getAttribute(this.attribute);
		this.classTheme = this.htmlDoc.getAttribute(this.classe);
		this.storedTheme();
	}

	private darkTheme() {
		this.isDarkTheme = true;
		this.htmlDoc.setAttribute(this.attribute, "dark");
		this.htmlDoc.setAttribute(this.classe, "dark");
		localStorage.setItem(this.THEME_MODE_NAME, "dark");
	}

	private lightTheme() {
		this.isDarkTheme = false;
		this.htmlDoc.setAttribute(this.attribute, "light");
		this.htmlDoc.setAttribute(this.classe, "light");
		localStorage.setItem(this.THEME_MODE_NAME, "light");
	}

	private storedTheme() {
		const storeTheme = localStorage.getItem(this.THEME_MODE_NAME);

		themePreference(this.THEME_MODE_NAME);

		!storeTheme || storeTheme?.toLowerCase() === "light"
			? this.lightTheme()
			: this.darkTheme();
	}

	changeTheme(): void {
		this.htmlDoc.getAttribute(this.attribute) === this.dataTheme &&
		this.htmlDoc.getAttribute(this.attribute) === this.classTheme
			? this.darkTheme()
			: this.lightTheme();
	}
}
