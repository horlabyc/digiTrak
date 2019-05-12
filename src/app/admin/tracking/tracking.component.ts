import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {
  lat: number = 9.0765;
  lng: number = 7.3986;

  location: any;
  constructor() {
    this.location = [
      {lat: '4.824167', long: '7.033611', loca: 'Baragi Avenue G.R.A Port Harcourt'},
      {lat: '7.250771', long: '5.210266', loca: '23 Oyemekun Road, Akure'},
      {lat: '6.605874', long: '3.349149', loca: '40, Alausa, Ikeja' },
      {lat: '12.000000', long: '8.516667', loca: '24 Lamido Road. Nassarawa GRA, Kano'},
      {lat: '4.982873', long: '8.334503', loca: 'Phase 1 GRA Ekorinim CRS Min of Works Road, Calabar'},
      {lat: '9.0765', long: '7.3986', loca: '40 Zuba road, Abuja'},
    ]
  }

  ngOnInit() {
    console.log(this.location);
  }

}
