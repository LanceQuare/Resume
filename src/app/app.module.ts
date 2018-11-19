import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoverComponent } from './cover/cover.component';
import { IntroComponent } from './intro/intro.component';
import { PersonalityComponent } from './personality/personality.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ActionsComponent } from './actions/actions.component';
import { TimelineDetailComponent } from './timeline-detail/timeline-detail.component';

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
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';

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
    SidenavComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
