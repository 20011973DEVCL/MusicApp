import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingersRoutingModule } from './singers-routing.module';
import { SingersComponent } from './singers/singers.component';


@NgModule({
  declarations: [
    SingersComponent
  ],
  imports: [
    CommonModule,
    SingersRoutingModule
  ]
})
export class SingersModule { }
