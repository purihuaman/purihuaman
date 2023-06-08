import {
	Component,
	ElementRef,
	HostListener,
	Renderer2,
	ViewChild,
	inject,
} from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	@ViewChild("headerRef") headerRef: ElementRef = new ElementRef("");
	private renderer2 = inject(Renderer2);

	ngOnInit(): void {}

	@HostListener("window:scroll", ["$event"])
	onScroll() {
		const header = this.headerRef.nativeElement;

		window.scrollY >= 70
			? this.renderer2.addClass(header, "darker")
			: this.renderer2.removeClass(header, "darker");
	}
}
