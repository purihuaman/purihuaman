import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { HeaderComponent } from "@layout/header/header.component";
import { FooterComponent } from "@layout/footer/footer.component";
import { ToggleComponent } from "@ui/toggle/toggle.component";
import { LogotipoComponent } from "@ui/logotipo/logotipo.component";
import { AuthorComponent } from "@ui/author/author.component";
import { CreditsComponent } from "@ui/credits/credits.component";
import { NavegationComponent } from "@ui/navegation/navegation.component";
import { BannerComponent } from "@layout/banner/banner.component";
import { NetworkComponent } from "@ui/network/network.component";
import { ModalComponent } from "@ui/modal/modal.component";
import { CommonModule } from "@angular/common";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ToggleComponent,
		LogotipoComponent,
		AuthorComponent,
		CreditsComponent,
		NavegationComponent,
		BannerComponent,
		NetworkComponent,
		ModalComponent,
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
