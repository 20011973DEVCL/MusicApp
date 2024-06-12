import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from '../../interfaces/Albums.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'http://localhost:5212';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Albums> {
    const headers = new HttpHeaders({
      'Custom-Header': 'HeaderValue'
    });

    return this.http.get<Albums>(`${this.apiUrl}/api/Albums`, { headers });
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addAlbum(Albums: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, Albums);
  }

  updateAlbum(id: number, Albums: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, Albums);
  }

  deleteAlbum(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/Albums/${id}`);
  }
}
