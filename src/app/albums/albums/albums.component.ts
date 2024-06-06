import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../service/albums.service';
import { AlbumsResult } from '../../interfaces/country.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: AlbumsResult[]=[];
  currentPage: number = 1; // Página actual
  pageSize: number = 20; // Cantidad de elementos por página

  constructor(private albumsService:AlbumsService) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe(data => {
      if (data.successful) {
        this.albums = data.result;
        console.log(this.albums);
      }
    });
    // Load albums logic
  }

  createAlbum(): void {
    // Create album logic
  }

  editAlbum(album: any): void {
    // Edit album logic
  }

  deleteAlbum(albumId: number): void {
    // Delete album logic
  }
}
