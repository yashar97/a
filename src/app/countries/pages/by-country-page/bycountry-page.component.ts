import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'app-bycountry-page',
  standalone: false,

  templateUrl: './bycountry-page.component.html',
  styleUrl: './bycountry-page.component.css'
})
export class BycountryPageComponent {

  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByCountry(term: string): void {
    this.countriesService.searchByCountry(term)
      .subscribe(c => {
        this.countries = c;
      });
  }

}
