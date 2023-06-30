import {
	Component,
	ElementRef,
	HostListener,
	Renderer2,
	ViewChild,
	inject,
} from "@angular/core";

@Component({
	selector: "app-navegation",
	templateUrl: "./navegation.component.html",
	styleUrls: ["./navegation.component.scss"],
})
export class NavegationComponent {
	private renderer2 = inject(Renderer2);

	isOpenMenu: boolean = false;
	@ViewChild("refMenu") elementRefMenu: ElementRef = new ElementRef("");
	// @ViewChild("sectionRef") sectionRef: ElementRef = new ElementRef("");

	links: Link[] = [
		{ url: "#home", title: "inicio", fragment: "home" },
		{ url: "#about", title: "sobre mí", fragment: "about" },
		{ url: "#projects", title: "proyectos", fragment: "projects" },
		{ url: "#services", title: "servicios", fragment: "services" },
	];

	ngOnInit(): void {}

	public openMenu(): void {
		this.isOpenMenu = !this.isOpenMenu;
		const element = this.elementRefMenu.nativeElement;

		this.isOpenMenu
			? this.renderer2.addClass(element, "show")
			: this.renderer2.removeClass(element, "show");
	}

	activeSection: string = ""; // Sección activa actualmente

	@HostListener("window:scroll", [])
	onScroll(): void {
		const sections = Array.from(document.querySelectorAll("section")).filter(
			(el) => el.getAttribute("id")
		);

		// Iterar sobre las secciones para determinar la sección actualmente visible
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			const scrollPosition = window.scrollY;
			const offset = window.innerHeight * 0.4;

			if (
				scrollPosition >= sectionTop - offset &&
				scrollPosition < sectionTop + sectionHeight
			)
				this.activeSection = section.id;
		});
	}
}

interface Link {
	url: string;
	title: string;
	fragment: string;
}
