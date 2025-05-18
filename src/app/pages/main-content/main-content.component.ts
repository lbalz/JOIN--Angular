import { Component } from '@angular/core';
import { LogoAnimationComponent } from "../../animations/logo-animation/logo-animation.component";
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LogoAnimationComponent, HeaderComponent, SidebarComponent, RouterOutlet, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
