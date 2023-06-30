import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServiceComponent } from "./service/service.component";
import { ProjectComponent } from "./project/project.component";
import { BannerComponent } from "@layout/banner/banner.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		children: [
			{
				path: "#home",
				component: BannerComponent,
				title: "Inicio - Purihuaman",
			},
			{
				path: "#about",
				component: AboutComponent,
				title: "Sobre mí - Purihuaman",
			},
			{
				path: "#projects",
				component: ProjectComponent,
				title: "Proyectos - Purihuaman",
			},
			{
				path: "#services",
				component: ServiceComponent,
				title: "Servicios - Purihuaman",
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ViewsRoutingModule {}
