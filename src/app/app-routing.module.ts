import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from '@pages/timeline/timeline.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { ContactComponent } from '@pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'contactme', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
