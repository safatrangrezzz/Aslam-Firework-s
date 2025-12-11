import { Component } from '@angular/core';
import { BannerSection } from '../banner-section/banner-section';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sub-landing-page',
  imports: [BannerSection,RouterOutlet,RouterLink],
  templateUrl: './sub-landing-page.html',
  styleUrl: './sub-landing-page.scss',
})
export class SubLandingPage {

}
