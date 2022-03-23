import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getData() {
    return this.http.get("../../assets/data/data.json", {
      params: new HttpParams().set('title', 'asda')
    })
  }

  getLocalStorageOrders() {
    let data: any = localStorage.getItem('cart');
    data = JSON.parse(data)
    return data;
  }
}
