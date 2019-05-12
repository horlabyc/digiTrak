import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alphaInc';
  lat: number;
  lng: number;
  cordinates: {};
  a = 51.678418; b = 7.809007;
  constructor() {
  }

  moveCar() {
    setInterval( () => {
      this.lat = (this.a) + 5;
      this.lng = (this.b) + 5;
    }, 5000);
  }

  move() {
    this.lat = (this.a) + 5;
    this.lng = (this.b) + 5;
    console.log(this.lat, this.lng);
  }
  ngOnInit() {
    // this.moveCar();
  }
}
