import {Injectable} from '@angular/core';
import {ResponseOrder} from "../models/order.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  constructor(private http: HttpClient) {}

  public getOrders():Observable<ResponseOrder> {
    return this.http.get<ResponseOrder>('assets/orders.json');
  }

}
