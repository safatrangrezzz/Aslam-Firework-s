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

  id: any = ''
  editForm: boolean = false
  tempobj: any = {
    name: '',
    brand: '',
    price: '',
    cat: '',
  }

  dataBaseData: any[] = [];


  constructor(private router: Router, private _dataBaseService: DataBaseService) {
    this.dataBaseData = _dataBaseService.getData()
  }

  logout() {
    localStorage.setItem('isLogin', 'false')
    this.router.navigate(['admin'])
  }


  edit(index: any) {
    this.editForm = true
    this.id = index
    console.log('click')
    console.log(this.id)
    this.tempobj.name = this.dataBaseData[this.id].name
    this.tempobj.brand = this.dataBaseData[this.id].brand
    this.tempobj.price = this.dataBaseData[this.id].price
    this.tempobj.cat = this.dataBaseData[this.id].Category
  }
  apply(name: any, brand: any, price: any, category: any) {

    //  this.tempobj.name = name
    //  this.tempobj.brand = brand
    //  this.tempobj.price = price
    //  this.tempobj.cat = category
    this.dataBaseData[this.id].name = name
    this.dataBaseData[this.id].brand = brand
    this.dataBaseData[this.id].price = price
    this.dataBaseData[this.id].Category = category
    this.editForm = false
  }

  delete(index: any) {
    this.dataBaseData.splice(index, 1)
  }

  cancel() {
    this.editForm = false
  }

}
