import { Component, OnInit } from '@angular/core';
import { DiiTrackserviceService } from 'src/app/dii-trackservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: number;
  constructor(private service: DiiTrackserviceService) { }

  ngOnInit() {
    let orders;
    this.service.getOrders().subscribe(res => {
      orders = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
      this.orders = orders.length;
    });
  }

}
