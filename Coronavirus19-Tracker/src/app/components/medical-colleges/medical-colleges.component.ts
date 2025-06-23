import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-medical-colleges',
  templateUrl: './medical-colleges.component.html',
  styleUrls: ['./medical-colleges.component.css']
})
export class MedicalCollegesComponent implements OnInit {
  college: any[] = [];
  Searchbox: string = '';

  constructor(private dataservice: DataServiceService) {}

  ngOnInit(): void {
    this.dataservice.getMedicalCollegeData().subscribe(data => {
      this.college = data?.data?.medicalColleges || [];
    });
  }

  searchclear(): void {
    this.Searchbox = '';
  }
}
