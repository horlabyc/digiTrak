import { Component, OnInit } from '@angular/core';
import { DiiTrackserviceService } from '../dii-trackservice.service';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.scss']
})
export class ClientRequestComponent implements OnInit {

  constructor(private service: DiiTrackserviceService) { }
  orders: any;
  ngOnInit() {
    this.service.getOrders().subscribe(res => {
      this.orders = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
      console.log(this.orders);
    });
  }

}
