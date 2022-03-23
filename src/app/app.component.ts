import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_Itstep_FinalProject';

  constructor() { }

  // webloader
  ngOnInit() {
    let loader = document.querySelector('.Mainloader') as HTMLElement;
    loader.className += 'hidden'


    var back = document.getElementById('scrolltop') as HTMLElement;
    window.addEventListener('scroll', () => {
      if (scrollY > 500) {
        back.classList.add('active');
      } else {
        back.classList.remove('active');
      }
    })

    back.addEventListener('click', () => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    })
  }
}
