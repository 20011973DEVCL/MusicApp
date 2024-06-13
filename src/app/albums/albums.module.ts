import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumsEditComponent } from './albums-edit/albums-edit.component';
import { AlbumsNewComponent } from './albums-new/albums-new.component';

@NgModule({
  declarations: [
    AlbumsListComponent,
    AlbumsEditComponent,
    AlbumsNewComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
