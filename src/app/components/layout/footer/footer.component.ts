import { Location } from "@angular/common";
import {
	Component,
	ElementRef,
	HostListener,
	Renderer2,
	ViewChild,
	inject,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
	@ViewChild("btnreturn") btnReturnRef: ElementRef = new ElementRef("");
	private renderer2 = inject(Renderer2);

	ngOnInit(): void {}

	@HostListener("window:scroll", ["$event"])
	onScroll() {
		const btn = this.btnReturnRef.nativeElement;

		window.scrollY >= 800
			? this.renderer2.addClass(btn, "hidden")
			: this.renderer2.removeClass(btn, "hidden");
	}
}
