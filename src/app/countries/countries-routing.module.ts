import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesEditComponent } from './countries-edit/countries-edit.component';
import { CountriesNewComponent } from './countries-new/countries-new.component';
import { CountriesListComponent } from './countries-list/countries-list.component';

const routes: Routes = [
  { path: 'countries', component: CountriesListComponent },
  { path: 'countries/edit/:id', component: CountriesEditComponent },
  { path: 'countries/new', component: CountriesNewComponent },
  { path: '', redirectTo: 'countries' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
