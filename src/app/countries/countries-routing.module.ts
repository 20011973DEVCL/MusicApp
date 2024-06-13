import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesEditComponent } from './countries-edit/countries-edit.component';
import { CountriesNewComponent } from './countries-new/countries-new.component';
import { CountriesListComponent } from './countries-list/countries-list.component';

const routes: Routes = [
  { path: '', component: CountriesListComponent },
  { path: 'edit/:id', component: CountriesEditComponent },
  { path: 'new', component: CountriesNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
