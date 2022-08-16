import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AssignedOrder, Orders, ResponseOrder} from "../../models/order.interface";

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {
  term = '';
  orders: Orders[];
  assigned: AssignedOrder[];
  allOrders: Orders[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<ResponseOrder>('assets/orders.json').subscribe(data => {
        this.orders = data.response.data;
      this.allOrders = this.orders;
        this.assigned = data.response.data[2].assigned_to


        console.log(this.orders);
        console.log(this.assigned);
      }
    )
  }
  search(value: string): void {
    this.orders = this.allOrders.filter((val) =>
      val.description.toLowerCase().includes(value)
    );
  }
}

