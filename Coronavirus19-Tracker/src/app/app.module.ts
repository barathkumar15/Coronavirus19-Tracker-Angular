import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HttpClientModule } from "@angular/common/http";
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { Ng2GoogleChartsModule } from "ng2-google-charts";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndiaComponent } from './components/india/india.component';
import { ContactComponent } from './components/contact/contact.component';
import { MedicalCollegesComponent } from './components/medical-colleges/medical-colleges.component';
import { HospitalBedsComponent } from './components/hospital-beds/hospital-beds.component';
import { TestingStatsComponent } from './components/testing-stats/testing-stats.component';
import { RawpatientdataComponent } from './components/rawpatientdata/rawpatientdata.component';
import { PopupsComponent } from './components/popups/popups.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './components/footer/footer.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { EpassComponent } from './components/epass/epass.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardComponent,
    IndiaComponent,
    ContactComponent,
    MedicalCollegesComponent,
    HospitalBedsComponent,
    TestingStatsComponent,
    RawpatientdataComponent,
    PopupsComponent,
    FooterComponent,
    SymptomsComponent,
    EpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    Ng2GoogleChartsModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [PopupsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
