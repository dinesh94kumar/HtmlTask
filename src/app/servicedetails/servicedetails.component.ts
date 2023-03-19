import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrls: ['./servicedetails.component.css']
})
export class ServicedetailsComponent implements OnInit {
  serviceName: any;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['servicename']) {
        let arr = params['servicename'].split(', ');
        this.serviceName = arr[0]; 
      }})
  }

}
