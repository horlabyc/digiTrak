import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DiiTrackserviceService } from '../dii-trackservice.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  weights: any = [];
  requestForm: FormGroup;
  locationA: any; locationB: any;
  constructor(private fb: FormBuilder, private service: DiiTrackserviceService) {
    this.weights = ['0-2 Tonnes', '2-5 Tonnes', '5 Tonnes above'];
    this.locationA = [
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
    this.locationB = [
      { lat: 6.650552, lng: 3.393684},
      {lat: 6.753146, lng: 4.189771},
      { lat: 6.755220, lng: 5.120836},
      {lat: 6.871874, lng: 5.764167},
      {lat: 7.529813, lng: 6.175260},
      {lat: 8.360057, lng: 6.911842},
      {lat: 9.306296, lng: 7.234346},
      {lat: 10.208809, lng: 7.361870},
      {lat: 11.296193, lng: 7.860506},
      {lat: 11.985932, lng: 8.593438}

    ]
    this.requestForm = this.fb.group({
      name: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      address: [null, Validators.required],
      destination: [null, Validators.required],
      weight: [null, Validators.required],
      lengt: [null, Validators.required],
      breadth: [null, Validators.required],
      height: [null, Validators.required],
      content: [null, Validators.required]
    });
  }

  makeRequest(value) {
    let formValue = {
      'name': value.name,
      'address': value.address,
      'phoneNumber': value.phoneNumber,
      'destination': value.destination,
      'weight': value.weight,
      'volume': (value.lengt * value.breadth * value.height) + 'Kg',
      'content': value.content,
      'status': 'Not Assigned'
    };
    // if (value.address === 'Abuja'){
    //   formValue['marker'] = this.locationA;
    //   localStorage.setItem('abujaKano', JSON.stringify(this.locationA));
    // }
    this.service.addOrders(formValue);
  }
  ngOnInit() {

  }

}
