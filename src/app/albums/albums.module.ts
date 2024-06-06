import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsRoutingModule } from './albums-routing.module';

@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
