import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {

  constructor(
    private api: ApiService,
    private activerouter: ActivatedRoute,
    private router: Router
  ) {
  }

  isLogged = localStorage.getItem('auth');

  quantity: number = 1;

  add(operator: any) {
    console.log(operator)
    if (this.quantity >= 1) {
      switch (operator) {
        case '+':
          this.quantity++;
          break;
        case '-':
          if (this.quantity > 1) this.quantity--;
          break;
      }
    }


  }
  filteredProducts: any = new Array;


  ngOnInit(): void {

    this.api.getData().subscribe((data: any) => {
      this.filteredProducts = data.filter((e: any) => {
        return e.id == this.activerouter.snapshot.params['id'];
      });
    });
  }

  // arr: any = [];
  addcart(e: any) {
    let arr: any = [];
    let parsecart: any = localStorage.getItem('cart');
    if (parsecart == null) {
      arr.push(e[0])
      localStorage.setItem('cart', JSON.stringify([arr[0]]));
    } else {
      let addCard: any = localStorage.getItem('cart');
      let parseaddCard: any = JSON.parse(addCard);
      parseaddCard.push(e[0]);
      parseaddCard = JSON.stringify(parseaddCard);
      localStorage.setItem('cart', parseaddCard);
    }
    // this.router.navigate(['orders'])
    window.location.href = 'orders';
  }
}
