import { inject } from "@angular/core";
import { Component } from "@angular/core";
import { ModalService } from "@services/modal.service";

@Component({
	selector: "app-modal",
	templateUrl: "./modal.component.html",
	styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
	private modalService: ModalService = inject(ModalService);
	public openModal$ = this.modalService.openModal$;

	ngOnInit(): void {}

	closeModal(): void {
		this.modalService.setOpenModal(false);
	}
}
