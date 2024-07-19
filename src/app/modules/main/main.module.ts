import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUsDetailsComponent } from './components/about-us-details/about-us-details.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { MaterialsDeatailsComponent } from './components/materials-deatails/materials-deatails.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { SupportUsComponent } from './components/support-us/support-us.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainComponent,
    AboutUsComponent,
    AboutUsDetailsComponent,
    MaterialsComponent,
    MaterialsDeatailsComponent,
    SocialMediaComponent,
    SupportUsComponent,
  ],
  imports: [CommonModule, MainRoutingModule, HttpClientModule],
})
export class MainModule {}
