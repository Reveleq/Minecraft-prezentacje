import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    private navService: NavService,
    private scrollService: ScrollService
  ) {}
  activeNav: boolean = false;
  animationSlide = {};
  slideNav() {}
  hideNavLinks() {
    this.activeNav = !this.activeNav;
    this.animationSlide = {
      slide: false,
    };
    this.scrollService.startScroll()
  }
  activeNavLinks() {
    this.activeNav = !this.activeNav;
    this.animationSlide = {
      slide: true,
    };
    this.scrollService.stopScroll()

  }
  ngOnInit(): void {
    
  }
}
