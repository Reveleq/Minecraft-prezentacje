import { Component, OnInit } from '@angular/core';
import { TeamData } from 'src/app/modules/core/models/main.models';
import { teamData } from 'src/assets/docs/docs';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  teamData: TeamData[] = teamData;
  showAll: boolean = false;
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
