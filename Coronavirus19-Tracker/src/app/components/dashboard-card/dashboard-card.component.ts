import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {

@Input('totalConfirmed')
totalConfirmed;
@Input('totalRecovered')
totalRecovered;
@Input('totalDeaths')
totalDeaths;
@Input('totalActive')
totalActive;
todayConfirmed = 0;
todayRecovered = 0;
todayDeaths = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
