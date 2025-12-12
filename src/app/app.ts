import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,Footer,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Aslam-fireworks');

  menuStatus:boolean = true

  ulClick(){
    this.menuStatus = true
  }
 

  menuOpen(){
    this.menuStatus= !this.menuStatus
  }
  goWhatsapp(){
    window.open('https://wa.me/917235924091', '_blank')
  }
}
