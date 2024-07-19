import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.scss'],
})
export class ScrollUpComponent implements OnInit {
  active = false;
  scroll() {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 350 ||
        document.documentElement.scrollTop > 300
      ) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }
}
