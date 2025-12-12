import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-edit-component',
  imports: [],
  templateUrl: './data-edit-component.html',
  styleUrl: './data-edit-component.scss',
})
export class DataEditComponent {
  constructor(private router:Router){}

  logout(){
    localStorage.setItem('isLogin','false')
    this.router.navigate(['admin'])
  }

}
