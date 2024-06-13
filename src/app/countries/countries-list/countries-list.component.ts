import { Component } from '@angular/core';
import { CountryResult } from '../../interfaces/country.interface';
import { Router } from '@angular/router';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent {
  countries: CountryResult[]=[];
  currentPage: number = 1; // Página actual
  pageSize: number = 20; // Cantidad de elementos por página

  constructor(private countryService: CountriesService, private router: Router) {
    this.countryService.getCountries().subscribe(data => {
      if (data.successful) {
        this.countries = data.result;
      }
    });
  }

  get totalPages(): number {
    return Math.ceil(this.countries.length / this.pageSize);
  }

  get displayedCountries(): CountryResult[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.countries.slice(startIndex, endIndex);
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

  editCountry(id: string): void {
    this.router.navigate([`/countries/edit/${id}`]);
  }

  addCountry(): void {
    this.router.navigate(['/countries/new']);
  }

  deleteCountry(id: string): void {
    this.countryService.deleteCountry(id);
    //this.countries = this.countryService.getCountries();
  }
}
