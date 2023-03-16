import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-flightbooking',
  templateUrl: './flightbooking.component.html',
  styleUrls: ['./flightbooking.component.css']
})
export class FlightbookingComponent implements OnInit {
submitted:boolean;
  constructor(private fb: FormBuilder,) { }
  viewFlights:boolean=false;
  from=new FormControl('',Validators.required);
  to=new FormControl('',Validators.required);
  depart=new FormControl('',Validators.required);
  return=new FormControl('',Validators.required);
  ngOnInit() {
    
  }
  findFlights(){
    this.submitted=true;
    if(this.from.value=="" || this.to.value=="" || this.depart.value=="" || this.return.value==""  ){
     console.log('aaa')
       return;
     }
    else{
      this.viewFlights=true;
    }
   
  }
}
