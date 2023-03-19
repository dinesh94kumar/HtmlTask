import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ServiceareaComponent } from './servicearea/servicearea.component';
import { PricingSocialmediaComponent } from './pricing-socialmedia/pricing-socialmedia.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { ServicedropdetailsComponent } from './servicedropdetails/servicedropdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    FlightbookingComponent,
    HotelbookingComponent,
    BannerComponent,
    HomeComponent,
    AboutComponent,
    PhotosComponent,
    ReviewsComponent,
    ServiceareaComponent,
    PricingSocialmediaComponent,
    ServicedetailsComponent,
    ServicedropdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
