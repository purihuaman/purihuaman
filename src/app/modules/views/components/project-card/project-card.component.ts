import { Input } from "@angular/core";
import { Component } from "@angular/core";
import { Repository } from "@core/interfaces/repository";

@Component({
	selector: "app-project-card",
	templateUrl: "./project-card.component.html",
	styleUrls: ["./project-card.component.scss"],
})
export class ProjectCardComponent {
	@Input() project: Repository = {} as Repository;

	ngOnInt(): void {
		console.log(this.project);
	}
}
