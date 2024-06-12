import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country> {
    const headers = new HttpHeaders({
      'Custom-Header': 'HeaderValue'
    });

    return this.http.get<Country>(`${this.apiUrl}/api/Country`, { headers });
  }

  getCountry(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addCountry(country: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, country);
  }

  updateCountry(id: number, country: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, country);
  }

  deleteCountry(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/Country/${id}`);
  }
}
