import { Component } from '@angular/core';
import { BannerSection } from '../banner-section/banner-section';
import { DataBaseService } from '../data-base-service';

@Component({
  selector: 'app-products',
  imports: [BannerSection],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {




  
  Products:any[]=[];
   displayProducts:any[]=[]

  constructor(private _dataBaseService:DataBaseService){

    this.Products = _dataBaseService.getData();
    console.log(this.Products)
    this.displayProducts = this.Products
  }

filterProducts(value:any){
  const userselect = (value.target as HTMLSelectElement).value
  if(userselect == 'all'){
        this.displayProducts = this.Products
  }else{

    this.displayProducts= this.Products.filter((product)=>product.Category == userselect)
  }
 

  }

}
