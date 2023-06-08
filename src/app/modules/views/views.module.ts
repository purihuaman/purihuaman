import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    ProjectComponent,
    SkillsComponent,
    ServiceCardComponent,
    ProjectCardComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
