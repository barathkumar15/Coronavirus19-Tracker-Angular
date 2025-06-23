import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { SummaryData, CountrySummary } from 'src/app/models/global-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  GlobalData: SummaryData;
  upDate: number;

  selectedCountryData: CountrySummary[] = [];
  filteredData: CountrySummary[] = [];

  searchTerm: string = '';
  sortColumn: string = '';
  sortDirection: boolean = true; // true = ascending

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.refresh();
    this.dataService.getCountriesList().subscribe((data) => {
      this.selectedCountryData = data || [];
      this.dataService.countriesData =  this.selectedCountryData;
      this.filteredData = [...this.selectedCountryData];
    });
  }

  refresh() {
    this.dataService.getCountries().subscribe((data) => {
      this.GlobalData = data;
      this.upDate = this.GlobalData.updated;
    });
  }

  onSearchChange() {
    const term = this.searchTerm.toLowerCase();
    this.filteredData = this.selectedCountryData.filter((item) =>
      item.country.toLowerCase().includes(term) || item.continent.toLowerCase().includes(term)
    );
  }

  sortData(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = !this.sortDirection;
    } else {
      this.sortColumn = column;
      this.sortDirection = true;
    }

    this.filteredData.sort((a: any, b: any) => {
      const valA = a[column];
      const valB = b[column];

      if (typeof valA === 'string') {
        return this.sortDirection
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      return this.sortDirection ? valA - valB : valB - valA;
    });
  }
}
