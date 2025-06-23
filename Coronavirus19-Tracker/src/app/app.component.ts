import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'coronavirus19-Tracker';
  storedTheme: string = 'theme-light'; // default fallback

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme-color');
    this.storedTheme = savedTheme === 'theme-dark' ? 'theme-dark' : 'theme-light';
    document.body.className = this.storedTheme;
  }
  
  setTheme(): void {
    this.storedTheme = this.storedTheme === 'theme-dark' ? 'theme-light' : 'theme-dark';
    localStorage.setItem('theme-color', this.storedTheme);
    document.body.className = this.storedTheme;
  }
  
}
