import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {path:'',
component:LandingpageComponent,
children:[
  {path:'',
component:BannerComponent},
  {path:'flight-booking',
component:FlightbookingComponent},
{path:'hotel-booking',
component:HotelbookingComponent}
]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
