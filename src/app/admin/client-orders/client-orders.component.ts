import { Component, OnInit } from '@angular/core';
import { DiiTrackserviceService } from 'src/app/dii-trackservice.service';

@Component({
  selector: 'app-client-orders',
  templateUrl: './client-orders.component.html',
  styleUrls: ['./client-orders.component.scss']
})
export class ClientOrdersComponent implements OnInit {

  orders: any;
  constructor(private service: DiiTrackserviceService) { }


  assignTask(order) {
    const newOrder = {
      'id': order.id,
      'name': order.name,
      'address': order.address,
      'phoneNumber': order.phoneNumber,
      'destination': order.destination,
      'weight': order.weight,
      'volume': order.volume,
      'content': order.content,
      'status': 'Assigned'
    };
    this.service.updateOrders(newOrder);
  }

  ngOnInit() {
    this.service.getOrders().subscribe(res => {
      this.orders = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }

}
