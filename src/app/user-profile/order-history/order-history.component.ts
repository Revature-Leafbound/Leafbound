import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import {MatTableModule} from '@angular/material/table'


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  
  ordersList: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrderHistory();
  }
  getOrderHistory() {
    this.orderService.getOrders().subscribe((res) => {
      this.ordersList.push(res);
      if (res)
        console.log("ok")
    },
      err =>
        console.log("faild")
    );
  }

}
