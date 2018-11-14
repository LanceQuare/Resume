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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    DashboardComponent,
    CoverComponent,
    IntroComponent,
    PersonalityComponent,
    PortfolioComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [ MatGridListModule, MatButtonModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
