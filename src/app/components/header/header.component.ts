import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoIconSrc: string = './assets/icons/default/header_logo.svg';
  helpIconSrc: string = './assets/icons/default/help.svg';
}
