import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from './card/card.component';

import { SharedModule } from '@app/shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [CardComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
