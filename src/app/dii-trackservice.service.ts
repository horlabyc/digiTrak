import { Injectable } from '@angular/core';
import { Orders } from './ordersModel';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiiTrackserviceService {
  baseUrl = 'http://157.230.190.68:8080/digitrak/api';
  constructor(private firestore: AngularFirestore,
    private toast: ToastrManager, private route: Router, private http: HttpClient) { }

  addOrders(order) {
    return this.firestore.collection('orders').add(order)
    .then(response => {
      this.toast.successToastr('Your order has been received');
      this.route.navigateByUrl('requests');
    }, err => {
      this.toast.errorToastr('Error creating your order');
    });
  }

  getOrders() {
    return this.firestore.collection('orders').snapshotChanges();
  }

  updateOrders(order) {
    this.firestore.doc('orders/' + order.id).update(order)
    .then(res => {
      this.toast.successToastr('Request has been assigned');
    }, err => {
      this.toast.errorToastr('Error assigning your order');
  });
}

login(details): Observable<any>{
  return this.http.post(`${this.baseUrl}/login`, details);
}

_login(details) {
  console.log(details);
  this.login(details).subscribe(res => {
    console.log(res);
  }, err => {
    console.log(err);
  });
}
}
