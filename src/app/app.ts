import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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

  router = inject(Router)

  menuStatus:boolean = true

  ulClick(){
    this.menuStatus = true
  }
 

  menuOpen(){
    this.menuStatus= !this.menuStatus
  }
  admin(){
    const login = localStorage.getItem('isLogin')
    if(login){
      this.router.navigate(['dataBase'])
    }
    else{
      alert('access not available first login please')
    this.router.navigate(['admin'])
  }
}
  goWhatsapp(){
    window.open('https://wa.me/917235924091', '_blank')
  }
}
