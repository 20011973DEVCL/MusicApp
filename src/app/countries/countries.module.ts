import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesEditComponent } from './countries-edit/countries-edit.component';
import { CountriesNewComponent } from './countries-new/countries-new.component';
import { CountriesListComponent } from './countries-list/countries-list.component';


@NgModule({
  declarations: [
    CountriesEditComponent,
    CountriesNewComponent,
    CountriesListComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
