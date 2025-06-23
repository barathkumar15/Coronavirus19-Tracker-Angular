import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { IndiaComponent } from './components/india/india.component';
import { ContactComponent } from './components/contact/contact.component';
import { MedicalCollegesComponent } from './components/medical-colleges/medical-colleges.component';
import { HospitalBedsComponent } from './components/hospital-beds/hospital-beds.component';
import { TestingStatsComponent } from './components/testing-stats/testing-stats.component';
import { RawpatientdataComponent } from './components/rawpatientdata/rawpatientdata.component';
import { EpassComponent } from './components/epass/epass.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'india', component: IndiaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'medical-colleges', component: MedicalCollegesComponent },
  { path: 'Hosptial-Beds', component: HospitalBedsComponent },
  { path: 'Testing-stats', component: TestingStatsComponent },
  { path: 'Rawpatientdata', component: RawpatientdataComponent },
  { path: 'epass', component: EpassComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
