import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from '../data-base-service';

@Component({
  selector: 'app-data-edit-component',
  imports: [],
  templateUrl: './data-edit-component.html',
  styleUrl: './data-edit-component.scss',
})
export class DataEditComponent {

 dataBaseData:any[]=[]


  constructor(private router:Router,private _dataBaseService:DataBaseService){

    this.dataBaseData = _dataBaseService.getData()

  }

  logout(){
    localStorage.setItem('isLogin','false')
    this.router.navigate(['admin'])
  }
   



}
