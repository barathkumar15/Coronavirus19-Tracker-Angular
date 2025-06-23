import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-hospital-beds',
  templateUrl: './hospital-beds.component.html',
  styleUrls: ['./hospital-beds.component.css']
})
export class HospitalBedsComponent implements OnInit {
  hospital: any[] = [];
  summary: any = {};
  Searchbox: string = '';

  constructor(private dataservice: DataServiceService) {}

  ngOnInit(): void {
    this.dataservice.getHospitalData().subscribe(data => {
      this.hospital = data?.data?.regional || [];
      this.summary = data?.data?.summary || {};
    });
  }

  searchclear(): void {
    this.Searchbox = '';
  }
}
