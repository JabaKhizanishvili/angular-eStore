import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private httpclient: HttpClient,
  ) { }

  login = new FormGroup({
    user: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
  });

  register = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(5)),
    rpassword: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
  })

  registerUser() {
    this.httpclient.post(
      "https://test-angular-33b0a-default-rtdb.firebaseio.com/users.json",
      this.register.value
    ).subscribe(
      (response) => {
        // console.log(response);
        this.register.reset();
        Swal.fire(
          'Good job!',
          'You Registered account!',
          'success'
        )
        this.router.navigate(['']);
      },
      (err) => {
        console.log(err, "error");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    )
  }


  loginUser() {
    let isLogged: boolean = false;
    this.httpclient.get("https://test-angular-33b0a-default-rtdb.firebaseio.com/users.json").subscribe((user: any) => {
      for (const key in user) {

        if (this.login.value.user == user[key].mail && this.login.value.pass == user[key].password) {
          isLogged = true;
          console.log(isLogged);
          localStorage.setItem('auth', JSON.stringify(user[key]));
          Swal.fire(
            'Good job!',
            'წარმატებით გაიარე ავტორიზაცია!',
            'success'
          )
          setInterval(() => {
            window.location.reload();
          }, 1000);
          this.router.navigate(['../']);
        }
      }
      if (!isLogged) {

        Swal.fire(
          'error',
          'მომხმარებლის პაროლი ან სახელი არასწორია!',
          'error'
        )
        this.login.reset();
      }
    }

    )
  }

  ngOnInit(): void {

  }

}
