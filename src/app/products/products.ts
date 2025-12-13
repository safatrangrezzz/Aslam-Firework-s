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



noProductsfound:boolean= false
inputval:any = ''
  
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
  searchActive(value:any){
       String(value).toLowerCase()
       this.noProductsfound = false

         this.displayProducts = this.Products.filter((product) =>  product.name.toLowerCase().includes(value))

           console.log(this.displayProducts.length)

              if(this.displayProducts.length === 0){
                
                this.noProductsfound= true
      }else{
        this.noProductsfound = false
      }
     
    }
  
  }

