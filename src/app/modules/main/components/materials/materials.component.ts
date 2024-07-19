import { Component, OnInit } from '@angular/core';
import { Materials } from 'src/app/modules/core/models/main.models';
import { materials } from 'src/assets/docs/docs';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
})
export class MaterialsComponent implements OnInit {
  materials: Materials[] = materials;
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
