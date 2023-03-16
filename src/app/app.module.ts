import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    FlightbookingComponent,
    HotelbookingComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
