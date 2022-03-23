import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private api: ApiService,
    private router: Router,
  ) {
    if (localStorage.getItem('auth')) {
      this.isLogged = false;
    };

    this.count = this.api.getLocalStorageOrders();
    this.count = this.count.length;
    // console.log(this.count.length);
  }

  responsive: boolean = false;

  count: any;

  isLogged = true;

  userData: any = localStorage.getItem('auth');
  jabaData: any = JSON.parse(this.userData);

  logOut() {
    localStorage.removeItem('auth');
    this.isLogged = false;
    window.location.reload();
  }

  jaba() {
    this.responsive = !this.responsive;
  }

  goToOrders() {
    if (this.count > 0) {
      this.router.navigate(['orders']);
    }
  }

  ngOnInit(): void {
    this.count = this.api.getLocalStorageOrders();
    this.count = this.count.length;
  }

}
