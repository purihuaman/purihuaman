import { Component } from "@angular/core";

@Component({
	selector: "app-toggle",
	templateUrl: "./toggle.component.html",
	styleUrls: ["./toggle.component.scss"],
})
export class ToggleComponent {
	isDarkTheme: boolean = true;
	dataTheme: string | null = "dark";
	classTheme: string | null = "dark";

	attribute: string = "data-theme";
	classe: string = "class";

	htmlDoc = document.querySelector("html") as HTMLHtmlElement;

	ngOnInit(): void {
		this.dataTheme = this.htmlDoc.getAttribute(this.attribute);
		this.classTheme = this.htmlDoc.getAttribute(this.classe);
	}

	changeTheme(): void {
		this.htmlDoc.getAttribute(this.attribute) === this.dataTheme &&
		this.htmlDoc.getAttribute(this.attribute) === this.classTheme
			? this.lightTheme()
			: this.darkTheme();
	}

	darkTheme() {
		this.isDarkTheme = true;
		this.htmlDoc.setAttribute(this.attribute, "dark");
		this.htmlDoc.setAttribute(this.classe, "dark");
	}

	lightTheme() {
		this.isDarkTheme = false;
		this.htmlDoc.setAttribute(this.attribute, "light");
		this.htmlDoc.setAttribute(this.classe, "light");
	}
}
