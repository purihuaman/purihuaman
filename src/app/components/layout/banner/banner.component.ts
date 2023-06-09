import { inject } from "@angular/core";
import { Component } from "@angular/core";
import { ModalService } from "@services/modal.service";

@Component({
	selector: "app-banner",
	templateUrl: "./banner.component.html",
	styleUrls: ["./banner.component.scss"],
})
export class BannerComponent {
	private modalService: ModalService = inject(ModalService);
	public openModal$ = this.modalService.openModal$;

	openModal(): void {
		this.modalService.setOpenModal(true);
	}
}
