import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  standalone: false,

  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  constructor(private countriesService: CountriesService) { }

  countries: Country[] = [];

  searchByRegion(region: string): void {
    this.countriesService.searchByRegion(region)
      .subscribe(c => {
        this.countries = c;
      });
  }

}
