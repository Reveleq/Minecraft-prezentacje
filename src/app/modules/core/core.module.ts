import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ScrollUpComponent } from './components/scroll-up/scroll-up.component';

@NgModule({
  declarations: [NavComponent, FooterComponent, ScrollUpComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavComponent, FooterComponent, ScrollUpComponent],
})
export class CoreModule {}
