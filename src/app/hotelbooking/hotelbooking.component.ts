import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotelbooking',
  templateUrl: './hotelbooking.component.html',
  styleUrls: ['./hotelbooking.component.css']
})
export class HotelbookingComponent implements OnInit {
  place=new FormControl('',Validators.required);

  checkin=new FormControl('',Validators.required);
  checkout=new FormControl('',Validators.required);
  submitted:boolean;
  viewHotels:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  findHotels(){
    this.submitted=true;
    if(this.place.value=="" || this.checkin.value=="" || this.checkout.value=="" ){
     console.log('aaa')
       return;
     }
    else{
      this.viewHotels=true;
    }
   
  }
}
