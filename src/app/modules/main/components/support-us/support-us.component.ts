import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-us',
  templateUrl: './support-us.component.html',
  styleUrls: ['./support-us.component.scss'],
})
export class SupportUsComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
