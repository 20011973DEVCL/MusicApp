import { Component } from '@angular/core';
import { AlbumsResult } from '../../interfaces/Albums.interface';
import { AlbumsService } from '../service/albums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.scss'
})
export class AlbumsListComponent {
  albums: AlbumsResult[]=[];
  currentPage: number = 1; // Página actual
  pageSize: number = 20; // Cantidad de elementos por página

  constructor(private albumsService: AlbumsService, private router: Router) {
    this.albumsService.getAlbums().subscribe(data => {
      if (data.successful) {
        this.albums = data.result;
      }
    });
  }

  get totalPages(): number {
    return Math.ceil(this.albums.length / this.pageSize);
  }

  get displayedalbums(): AlbumsResult[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.albums.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  editAlbums(id: number): void {
    this.router.navigate([`/edit/${id}`]);
  }

  addAlbums(): void {
    this.router.navigate(['/new']);
  }

  deleteAlbums(id: number): void {
    this.albumsService.deleteAlbum(id);
    //this.albums = this.countryService.getalbums();
  }
}
