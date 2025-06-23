import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css'],
})
export class IndiaComponent implements OnInit {
  searchbox: string = '';
  GlobalData: any;
  Statewise: any[] = [];

  totalConfirmed: number = 0;
  totalRecovered: number = 0;
  totalDeaths: number = 0;
  totalActive: number = 0;
  upDate: string = '';

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.dataService.getCoronaIndiaData().subscribe((data) => {
      const total = data.data.total;
      this.GlobalData = total;

      this.totalConfirmed = total.confirmed;
      this.totalRecovered = total.recovered;
      this.totalDeaths = total.deaths;
      this.totalActive = total.active;
      this.upDate = data.lastOriginUpdate;

      this.Statewise = data.data.statewise;
    });
  }

  searchClear(): void {
    this.searchbox = '';
  }

  filteredStatewise() {
    if (!this.searchbox) return this.Statewise;

    const term = this.searchbox.toLowerCase();
    return this.Statewise.filter((state) =>
      state.state.toLowerCase().includes(term)
    );
  }
}
