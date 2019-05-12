import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-orders',
  templateUrl: './track-orders.component.html',
  styleUrls: ['./track-orders.component.scss']
})
export class TrackOrdersComponent implements OnInit {
  lat: number =9.716092;
  lng: number = 7.958330;
  markerPoints = [
    { lat: 9.121070, lng: 7.403266},
    { lat: 9.159046, lng: 7.377180},
    { lat: 9.209202, lng: 7.392307},
    { lat: 9.276992, lng: 7.386841},
    { lat: 9.339367, lng: 7.376566},
    { lat: 9.376658, lng: 7.379815},
    { lat: 9.446040, lng: 7.408196},
    { lat: 9.533798, lng: 7.469894},
    { lat: 9.718755, lng: 7.456203},
    { lat: 10.193675, lng: 7.349384},
    { lat: 10.416955, lng: 7.405223},
    { lat: 10.607615, lng: 7.457925},
    { lat: 10.767491, lng: 7.520858},
    { lat: 10.887804, lng: 7.639109},
    { lat: 11.230804, lng: 7.792514},
    { lat: 11.363303, lng: 8.008933},
    { lat: 11.509278, lng: 8.226980},
    { lat: 11.813964, lng: 8.487151},
    { lat: 11.985932, lng: 8.593438},
    { lat: 11.230804, lng: 7.792514},
  ];
  iconUrl = '../../../assets/images/trucking.png';
  markersToPlot: any = [];
  markers: any = [
  ];
  constructor() { }

  move() {
    let i = 1;
    const timer = setInterval(() => {
      this.markersToPlot.push(this.markerPoints[i]);
      i++;
      if (i > this.markerPoints.length) {
        clearInterval(timer);
      }
    }, 10000);
  }

  ngOnInit() {
    this.lat = this.markerPoints[0].lat;
    this.lng = this.markerPoints[0].lng;
    this.markersToPlot.push({ lat: 9.121070, lng: 7.403266});
    this.move();
  }

}
