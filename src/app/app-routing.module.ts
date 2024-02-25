import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicStudiesComponent } from './components/academic-studies/academic-studies.component';
import { HomeComponent } from './components/home/home.component';
import { ShortTermComponent } from './components/short-term/short-term.component';
import { AccommodationComponent } from './components/accommodation/accommodation.component';
import { WelfareSupportComponent } from './components/welfare-support/welfare-support.component';
import { GetApplicationComponent } from './components/get-application/get-application.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Academic-Studies', component: AcademicStudiesComponent },
  { path: 'Short-term-English', component: ShortTermComponent },
  { path: 'Accommodation', component: AccommodationComponent },
  { path: 'Welfare-Support', component: WelfareSupportComponent },
  { path: 'Get-Application', component:GetApplicationComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
