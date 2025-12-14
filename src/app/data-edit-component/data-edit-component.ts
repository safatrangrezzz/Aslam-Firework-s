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

  
  editForm:boolean = false
   tempobj:any={
      naam:'',
      price:'',
      brand:'',
      cat:'',
  }

 dataBaseData:any[]=[]


  constructor(private router:Router,private _dataBaseService:DataBaseService){

    this.dataBaseData = _dataBaseService.getData()

  }

  logout(){
    localStorage.setItem('isLogin','false')
    this.router.navigate(['admin'])
  }
   
id:any = ''

  edit(index:any){
    this.editForm = true
    this.id = index
    console.log('click')
  }
 
  cancel(){
    this.editForm = false
  }

 
  
  apply(name:any,brand:any,price:any,category:any){

    if(name === '' || brand === '' || price === '' || category == ''){
      name = this.dataBaseData[this.id].name
      brand = this.dataBaseData[this.id].brand
      price = this.dataBaseData[this.id].price
      category = this.dataBaseData[this.id].Category

      
      
      console.log(this.id,name,brand,price,category)
      console.log(this.dataBaseData[this.id].name)
      
    }else{
      console.log(name,brand,price,category)

      this.dataBaseData[this.id].name = name
      this.dataBaseData[this.id].brand = brand
      this.dataBaseData[this.id].price = price
      this.dataBaseData[this.id].Category = category
    }
      this.editForm = false
  }

}
