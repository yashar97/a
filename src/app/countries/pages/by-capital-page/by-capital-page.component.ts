import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term)
      .subscribe(c => {
        this.countries = c;
      });
  }

}
