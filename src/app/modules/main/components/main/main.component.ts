import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavService } from 'src/app/modules/core/services/nav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(private navService: NavService) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  ngOnDestroy(): void {}
}
