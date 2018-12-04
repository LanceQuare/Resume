import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from '@pages/timeline/timeline.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { CoverComponent } from '@pages/cover/cover.component';
import { IntroComponent } from '@pages/intro/intro.component';
import { PersonalityComponent } from '@pages/personality/personality.component';
import { PortfolioComponent } from '@pages/portfolio/portfolio.component';
import { ActionsComponent } from '@pages/actions/actions.component';
import { SidenavComponent } from '@pages/sidenav/sidenav.component';
import { TimelineDetailComponent } from '@pages/timeline-detail/timeline-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule
} from '@angular/material';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { HttpClientModule } from '@angular/common/http';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { SidemenuColorDirective } from './directives/sidemenu-color.directive';

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
    TimelineDetailComponent,
    SidenavComponent,
    SidemenuColorDirective
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
    HttpClientModule,
    ScrollDispatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
