import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DiiTrackserviceService } from '../dii-trackservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  trackIdForm: FormGroup;
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
  markersToPlot: any = [];
  markers: any = [
  ];
  constructor(private fb: FormBuilder, private route: Router, public toastr: ToastrManager, private service: DiiTrackserviceService) {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
    this.trackIdForm = this.fb.group({
      trackingId: [null, Validators.required]
    });
  }

  login(formValue) {
    this.toastr.successToastr('Logged in Successfully');
    this.route.navigateByUrl('request');
    // console.log(formValue);
    // this.service._login({email: formValue.email, password: formValue.password})
  }

  move() {
    this.lat = this.markerPoints[0].lat;
    this.lng = this.markerPoints[0].lng;
    this.markersToPlot.push({ lat: 9.121070, lng: 7.403266});
    let i = 1;
    const timer = setInterval(() => {
      this.markersToPlot.push(this.markerPoints[i]);
      i++;
      if (i > this.markerPoints.length) {
        clearInterval(timer);
      }
    }, 5000);
  }

  ngOnInit() {
  }

}
