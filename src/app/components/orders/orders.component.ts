import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(
    private api: ApiService,
  ) { }

  data: any;

  jaba(id: any) {
    this.data = this.data.filter((e: any) => e.id != id);
    console.log(this.data)
    localStorage.setItem('cart', JSON.stringify(this.data));
    window.location.reload();
  }

  ngOnInit(): void {
    this.data = this.api.getLocalStorageOrders()
  }

}
