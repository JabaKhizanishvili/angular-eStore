import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // carousel start
  images = [62, 83, 466, 965, 982, 1043, 400].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // carousel end


  minValue: number = 1000;
  maxValue: number = 4000;
  options: Options = {
    floor: 0,
    ceil: 9000
  };

  priceFilter(min: any, max: any) {
    this.filteredProducts = this.data.filter((el: any) => {
      return el.price >= min && el.price <= max;
    });
  }

  constructor(
    private api: ApiService,
  ) { }

  jaba(val: any) {
    console.log(val);
  }
  search = new FormControl('');

  // radioFilter = new FormGroup({
  //   phone: new FormControl(''),
  //   laptop: new FormControl(''),
  //   lastName: new FormControl(''),
  // });


  onSubmit(e: any) {
    // console.log(e);
    this.filteredProducts = this.data.filter((data: any) => data.cat.search(e.value) > -1)
  }

  filteredProducts: any = new Array();

  searchPost(val: any) {
    // console.log(this.search.value)
    setTimeout(() => {
      this.filteredProducts = this.data.filter((el: any) => {
        return el.title.toLowerCase().search(val.toLowerCase()) > -1;
      });
    }, 500);
  }

  data: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false,
  }



  ngOnInit(): void {
    this.api.getData().subscribe(data => {
      this.data = data;
      this.filteredProducts = data;
    })
  }

}
