import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Orders, ResponseOrder} from "../../models/order.interface";

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {
  term = '';
  orders: Orders[];
  allOrders: Orders[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<ResponseOrder>('assets/orders.json').subscribe(data => {
        this.orders = data.response.data;
        this.allOrders = this.orders;
      }
    )
  }

  search(value: string): void {
    this.orders = this.allOrders.filter((val) =>
      val.description.toLowerCase().includes(value)
    );
  }
}

