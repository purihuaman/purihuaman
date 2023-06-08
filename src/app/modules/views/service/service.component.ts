import { Component } from "@angular/core";
import { Service } from "@core/interfaces/service";

@Component({
	selector: "app-service",
	templateUrl: "./service.component.html",
	styleUrls: ["./service.component.scss"],
})
export class ServiceComponent {
	serviceList: Service[] = [
		{
			title: "diseño web",
			description:
				"Maqueto tus diseños estáticos, los convierto en sitios mágicos y aplicaciones web responsivas, rápidas e accesibles.",
			image: "assets/images/web-design.svg",
		},
		{
			title: "programación web",
			description:
				"Desarrollo sitios y aplicaciones web. Te ayudo a construir y hacer realidad tu proyecto de principio a fin.",
			image: "assets/images/web-programming.svg",
		},
		{
			title: "desarrollo eficaz",
			description:
				"El diseño es el principal fuerte ya que me encargo que tu página web siga los estándares y tendencias internacionales.",
			image: "assets/images/effective-development.svg",
		},
	];
}
