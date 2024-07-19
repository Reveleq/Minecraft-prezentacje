import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TeamData } from 'src/app/modules/core/models/main.models';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { teamData } from 'src/assets/docs/docs';

@Component({
  selector: 'app-about-us-details',
  templateUrl: './about-us-details.component.html',
  styleUrls: ['./about-us-details.component.scss'],
})
export class AboutUsDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrollService: ScrollService
  ) {}

  teamData!: TeamData;
  id!: number;
  src: string | undefined;
  back() {
    this.router.navigate(['/o-nas']);
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
      this.teamData = teamData[this.id - 1];
      this.src = this.teamData.src;
      this.scrollService.stopScroll();
    });
  }
  ngOnDestroy(): void {
    this.scrollService.startScroll();
  }
  backPopup() {
    this.router.navigate([`/o-nas/${this.id - 1}`]);
  }
  nextPopup() {
    this.router.navigate([`/o-nas/${this.id + 1}`]);
  }
}
