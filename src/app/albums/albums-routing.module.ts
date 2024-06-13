import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumsEditComponent } from './albums-edit/albums-edit.component';
import { AlbumsNewComponent } from './albums-new/albums-new.component';

const routes: Routes = [
  { path: '', component: AlbumsListComponent },
  { path: 'edit/:id', component: AlbumsEditComponent},
  { path: 'new', component: AlbumsNewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
