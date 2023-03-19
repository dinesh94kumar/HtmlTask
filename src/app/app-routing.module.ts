import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ServiceareaComponent } from './servicearea/servicearea.component';
import { AboutComponent } from './about/about.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { ServicedropdetailsComponent } from './servicedropdetails/servicedropdetails.component';

const routes: Routes = [
  {path:'',
component:LandingpageComponent,
children:[
  {path:'',
component:BannerComponent},
  {path:'flight-booking',
component:FlightbookingComponent},
{path:'hotel-booking',
component:HotelbookingComponent},
{path:'home',
component:HomeComponent},
{path:'photos',
component:PhotosComponent},
{path:'review',
component:ReviewsComponent},
{path:'servicearea',
component:ServiceareaComponent},
{path:'about',
component:AboutComponent},
{path:'servicedetails/:servicename',
component:ServicedetailsComponent},
{path:'servicedropdetails/:servicedropname',
component:ServicedropdetailsComponent}
]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
