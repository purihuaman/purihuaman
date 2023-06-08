import { Component, Input } from "@angular/core";
import { Service } from "@core/interfaces/service";

@Component({
	selector: "app-service-card",
	templateUrl: "./service-card.component.html",
	styleUrls: ["./service-card.component.scss"],
})
export class ServiceCardComponent {
	@Input() service: Service = {} as Service;
}
