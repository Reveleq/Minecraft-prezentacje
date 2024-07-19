import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Materials } from 'src/app/modules/core/models/main.models';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { materials } from 'src/assets/docs/docs';

@Component({
  selector: 'app-materials-deatails',
  templateUrl: './materials-deatails.component.html',
  styleUrls: ['./materials-deatails.component.scss'],
})
export class MaterialsDeatailsComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrollService: ScrollService
  ) {}
  material!: Materials;
  id!: number;
  back() {
    this.router.navigate(['/materialy']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
      this.material = materials[this.id - 1];
    });
    this.scrollService.stopScroll();
  }
  ngOnDestroy(): void {
    this.scrollService.startScroll();
  }
}
