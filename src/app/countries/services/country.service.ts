import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    url: string = 'https://restcountries.com/v3.1';
    constructor(private http: HttpClient) { }

    searchCapital(term: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.url}/capital/${term}`)
            .pipe(
                catchError(() => of([]))
            )
    }

    searchByCountry(term: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.url}/name/${term}`)
            .pipe(
                catchError(() => of([]))
            )
    }

    searchByRegion(region: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.url}/region/${region}`)
            .pipe(
                catchError(() => of([]))
            )
    }

}