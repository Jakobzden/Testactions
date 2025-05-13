import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // Denne component er standalone, men der bliver brugt angular 19, så den er ikke nødvendig
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
