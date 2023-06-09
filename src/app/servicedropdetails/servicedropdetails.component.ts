import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicedropdetails',
  templateUrl: './servicedropdetails.component.html',
  styleUrls: ['./servicedropdetails.component.css']
})
export class ServicedropdetailsComponent implements OnInit {
  servicedropName: any;
  SerArry=[
    {name:'Alameda, CA'},
    {name:'Alviso, CA'},
    {name:'Atherton, CA'},
    {name:'Belmont, CA'},
    {name:'Berkeley, CA'},
    {name:'Blackhawk, CA'},
    {name:'Blossom Valley, CA'},
    {name:'Bonny Doon, CA'},
    {name:'Brisbane, CA'},
    {name:'Burlingame, CA'},
    {name:'Campbell, CA'},
    {name:'Canyon, CA'},
    {name:'Castro Valley, CA'},
    {name:'Colma, CA'},
    {name:'Corralitos, CA'},
    {name:'Coyote, CA'},
    {name:'Cupertino, CA'},
    {name:'Daly City, CA'},
    {name:'Danville, CA'},
    {name:'Dublin, CA'},
    {name:'East Palo Alto, CA'},
    {name:'El Granada, CA'},
    {name:'Emerald Hills, CA'},
    {name:'Emeryville, CA'},
    {name:'Felton, CA'},
    {name:'Foster City, CA'},
    {name:'Fremont, CA'},
    {name:'Half Moon Bay, CA'},
    {name:'Hayward, CA'},
    {name:'Hillsborough, CA'},
    {name:'Holy City, CA'},
    {name:'La Honda, CA'},
    {name:'La Selva Beach, CA'},
    {name:'Loma Mar, CA'},
    {name:'Los Altos, CA'},
    {name:'Los Altos Hills, CA'},
    {name:'Los Gatos, CA'},
    {name:'Menlo Park, CA'},
    {name:'Millbrae, CA'},
    {name:'Milpitas, CA'},
    {name:'Moffett Field, CA'},
    {name:'Montara, CA'},
    {name:'Monte Sereno, CA'},
    {name:'Monte Vista, CA'},
    {name:'Moraga, CA'},
    {name:'Moss Beach, CA'},
    {name:'Mount Eden, CA'},
    {name:'Mount Hamilton, CA'},
    {name:'Mountain View, CA'},
    {name:'Mt Hamilton, CA'},
    {name:'Mt Madonna, CA'},
    {name:'New Almaden, CA'},
    {name:'Newark, CA'},
    {name:'Oakland, CA'},
    {name:'Orinda, CA'},
    {name:'Pacifica, CA'},
    {name:'Pajaro, CA'},
    {name:'Palo Alto, CA'},
    {name:'Palomar Park, CA'},
    {name:'Permanente, CA'},
    {name:'Pescadero, CA'},
    {name:'Piedmont, CA'},
    {name:'Pleasanton, CA'},
    {name:'Portola Valley, CA'},
    {name:'Portola Vally, CA'},
    {name:'Princeton by the Sea, CA'},
    {name:'Redwood City, CA'},
    {name:'Redwood Estates, CA'},
    {name:'Rio del Mar, CA'},
    {name:'San Bruno, CA'},
    {name:'San Carlos, CA'},
    {name:'San Francisco, CA'},
    {name:'San Gregorio, CA'},
    {name:'San Jose, CA'},
    {name:'San Leandro, CA'},
    {name:'San Lorenzo, CA'},
    {name:'San Mateo, CA'},
    {name:'San Ramon, CA'},
    {name:'Santa Clara, CA'},
    {name:'Saratoga, CA'},
    {name:'Seacliff, CA'},
    {name:'Sharp Park, CA'},
    {name:'South San Francisco, CA'},
    {name:'Stanford, CA'},
    {name:'Sunnyvale, CA'},
    {name:'Sunol, CA'},
    {name:'Union City, CA'},
    {name:'West Menlo Park, CA'},
    {name:'Woodside, CA'}
  ]

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['servicedropname']) {
        this.servicedropName = params['servicedropname']       
      }})
  }

}
