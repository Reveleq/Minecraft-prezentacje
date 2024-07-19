import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUsDetailsComponent } from './components/about-us-details/about-us-details.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { MaterialsDeatailsComponent } from './components/materials-deatails/materials-deatails.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { SupportUsComponent } from './components/support-us/support-us.component';
const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  {
    path: 'o-nas',
    component: AboutUsComponent,
    title: 'O nas | Minecraft Prezenctacje',
  },
  {
    path: 'o-nas/:id',
    component: AboutUsDetailsComponent,
    title: 'O nas | Minecraft Prezenctacje',
  },
  {
    path: 'materialy',
    component: MaterialsComponent,
    title: 'Materiały | Minecraft Prezenctacje',
  },
  {
    path: 'materialy/:id',
    component: MaterialsDeatailsComponent,
    title: 'Materiały | Minecraft Prezenctacje',
  },
  {
    path: 'social-media',
    component: SocialMediaComponent,
    title: 'Social Media | Minecraft Prezenctacje',
  },
  // { path: 'wesprzyj-nas', component: SupportUsComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
