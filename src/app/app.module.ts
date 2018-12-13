import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatChipsModule,
  MatDividerModule,
  MatCardModule
} from '@angular/material';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { HttpClientModule } from '@angular/common/http';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

// Current Project
import { SidemenuColorDirective } from '@directives/sidemenu-color.directive';
import { TimelineContecntDirective } from '@directives/timeline-contecnt.directive';
import { TimelineComponent } from '@pages/timeline/timeline.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { CoverComponent } from '@pages/cover/cover.component';
import { IntroComponent } from '@pages/intro/intro.component';
import { PersonalityComponent } from '@pages/personality/personality.component';
import { PortfolioComponent } from '@pages/portfolio/portfolio.component';
import { ActionsComponent } from '@pages/actions/actions.component';
import { SidenavComponent } from '@pages/sidenav/sidenav.component';
import { ProjectEventComponent } from '@pages/timeline/project-event/project-event.component';
import { TimelineEventComponent } from '@pages/timeline/timeline-event/timeline-event.component';
import { PersonalEventComponent } from '@pages/timeline/personal-event/personal-event.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { ContactCoverComponent } from '@pages/contact/contact-cover/contact-cover.component';
import { ContactInfoComponent } from '@pages/contact/contact-info/contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    DashboardComponent,
    CoverComponent,
    IntroComponent,
    PersonalityComponent,
    PortfolioComponent,
    ActionsComponent,
    SidenavComponent,
    SidemenuColorDirective,
    TimelineContecntDirective,
    ProjectEventComponent,
    TimelineEventComponent,
    PersonalEventComponent,
    ContactComponent,
    ContactCoverComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MglTimelineModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    HttpClientModule,
    ScrollDispatchModule
  ],
  entryComponents: [ ProjectEventComponent, PersonalEventComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
