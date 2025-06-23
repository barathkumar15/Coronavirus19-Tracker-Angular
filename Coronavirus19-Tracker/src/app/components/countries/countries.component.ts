import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { CountrySummary } from 'src/app/models/global-data';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countriesData: CountrySummary[] = [];
  selectedCountryData: CountrySummary[] = [];

  constructor(private service: DataServiceService) {}

  ngOnInit(): void {
    if (!this.service?.countriesData?.length) {
      this.service.getCountriesList().subscribe((data) => {
        this.service.countriesData = data || [];
        this.countriesData = data || [];
        this.selectedCountryData = [...this.countriesData]; // default full list
      });
    } else {
      this.countriesData = this.service.countriesData;
      this.selectedCountryData = [...this.countriesData];
    }
  }

  getCountry(iso3: string): void {
    const selected = this.countriesData.filter(
      (e) => e?.countryInfo?.iso3 === iso3
    );
    this.selectedCountryData = selected.length ? selected : [];
  }
}
