export interface GlobalDataSummary {
  country?: string,
  confirmed?: number,
  deaths?: number,
  recovered?: number,
  active?: number
}

export interface SummaryData {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
}

export interface Countries {
  Country: string;
  CountryCode: string;
  Date: string;
  NewConfirmed: Number;
  NewDeaths: Number;
  NewRecovered: Number;
  Slug: string;
  TotalConfirmed: Number;
  TotalDeaths: Number;
  TotalRecovered: Number;
}
export interface DataWiseData {
  countryCode?: string,
  slug?: string,
  newConfirmed?: number,
  totalConfirmed?: number,
  newDeaths?: number,
  totalDeaths?: number,
  newRecovered?: number,
  totalRecovered?: number,
  Date?: Date,
  Country: number,
  Active: number,
  Recovered: number,
  Deaths: number,
  Confirmed: number
}

export interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}

export interface CountrySummary {
  updated: number;
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
}
