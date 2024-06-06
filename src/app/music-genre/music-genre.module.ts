import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicGenreRoutingModule } from './music-genre-routing.module';
import { MusicGenreComponent } from './music-genre/music-genre.component';


@NgModule({
  declarations: [
    MusicGenreComponent
  ],
  imports: [
    CommonModule,
    MusicGenreRoutingModule
  ]
})
export class MusicGenreModule { }
