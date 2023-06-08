import { Component } from "@angular/core";
import { Skill } from "@core/interfaces/skill";

@Component({
	selector: "app-skills",
	templateUrl: "./skills.component.html",
	styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent {
	public skills: Skill[] = [
		{
			url: "https://developer.mozilla.org/es/docs/Web/HTML",
			urlIcon: "/assets/icons/icons.svg#html",
			title: "Html 5",
		},
		{
			url: "https://developer.mozilla.org/es/docs/Web/CSS",
			urlIcon: "/assets/icons/icons.svg#css",
			title: "css 3",
		},
		{
			url: "https://sass-lang.com/",
			urlIcon: "/assets/icons/icons.svg#sass",
			title: "sass",
		},
		{
			url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
			urlIcon: "/assets/icons/icons.svg#javascript",
			title: "javascript",
		},
		{
			url: "https://angular.io/",
			urlIcon: "/assets/icons/icons.svg#angular",
			title: "angular",
		},
		{
			url: "https://www.typescriptlang.org/",
			urlIcon: "/assets/icons/icons.svg#typescript",
			title: "typescript",
		},
		{
			url: "https://getbootstrap.com/",
			urlIcon: "/assets/icons/icons.svg#bootstrap",
			title: "bootstrap",
		},
		{
			url: "https://tailwindcss.com/",
			urlIcon: "/assets/icons/icons.svg#tailwindcss",
			title: "tailwind css",
		},
		{
			url: "https://git-scm.com/",
			urlIcon: "/assets/icons/icons.svg#git",
			title: "git",
		},
	];
}
