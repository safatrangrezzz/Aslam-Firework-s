import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from '../data-base-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-edit-component',
  imports: [FormsModule],
  templateUrl: './data-edit-component.html',
  styleUrl: './data-edit-component.scss',
})
export class DataEditComponent {




  // id: any = ''
  
  // imgPopUp: boolean = false
  // img:string = ''
  // tempobj: any = {
  //   name: '',
  //   brand: '',
  //   price: '',
  //   cat: '',
  // }

  allData: any[] = [];
  dataBaseData: any[] = [];
  editForm: boolean = false


  constructor(private router: Router, private _dataBaseService: DataBaseService) {
    this.dataBaseData = _dataBaseService.getData()
    this.allData = this.dataBaseData
  }
  searchActive(val: string) {
    const lowerCaseVal = val.toLowerCase()
    this.allData = this.dataBaseData.filter((data) => data.name.toLowerCase().includes(lowerCaseVal))
  }
  logout() {
    localStorage.setItem('isLogin', 'false')
    this.router.navigate(['admin'])
  }
  onNewProductadd(){
    this.editForm = true
  }
  delete(index: any) {
    this.dataBaseData.splice(index, 1)
  }
  edit(){
    this.editForm = true
  }
  onCancle(){
    this.editForm = false
  }
  onAdd(){
    this.editForm = false
  }



  // edit(index: any) {
  //   this.editForm = true
  //   this.id = index
  //   console.log('click')
  //   console.log(this.id)
  //   this.tempobj.name = this.dataBaseData[this.id].name
  //   this.tempobj.brand = this.dataBaseData[this.id].brand
  //   this.tempobj.price = this.dataBaseData[this.id].price
  //   this.tempobj.cat = this.dataBaseData[this.id].Category

  // }
  // apply(name: any, brand: any, price: any, category: any) {

  //   this.dataBaseData[this.id].name = name
  //   this.dataBaseData[this.id].brand = brand
  //   this.dataBaseData[this.id].price = price
  //   this.dataBaseData[this.id].Category = category
  //   this.editForm = false
  // }

  // cancel() {
  //   this.editForm = false;
  // }

  // onImg(data:any){
  //   this.imgPopUp = true
  //   this.img = data.img
  //   console.log(`${this.img,data}`)

  // }
  // imgCloseBtn(){
  //   this.imgPopUp = false;

  // }

}
