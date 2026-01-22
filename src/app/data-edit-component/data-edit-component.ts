import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
// import { DataBaseService } from '../data-base-service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-data-edit-component',
  imports: [ ReactiveFormsModule, HttpClientModule],
  templateUrl: './data-edit-component.html',
  styleUrl: './data-edit-component.scss',
})
export class DataEditComponent implements OnInit {

  allData: any[] = [];
  dataBaseData: any[] = [];
  base64String = '';
  private http = inject(HttpClient)

  myForm : FormGroup


  constructor(private router: Router,
    // private _dataBaseService: DataBaseService,
    private fb: FormBuilder,) {
    // this.dataBaseData = _dataBaseService.getData()
    // this.allData = this.dataBaseData ;
    this.myForm= this.fb.group({
      id:['0'],
      image:[''],
      name:[''],
      brand:[''],
      category:[''],
      price:['']
    })
  }
  ngOnInit(): void {
    this.apicall()
  }
  apicall(){
    this.http.get('https://products-dimensions.vercel.app/products/').subscribe( (res:any)  => {
      this.allData = res
    })
  }
  onSubmit(){
    const formData = this.myForm.value
    const payLoad = {
      id: '0',
      image: this.base64String,
      name:formData.name,
      brand: formData.brand,
      category:formData.category,
      price:formData.price
     }
     console.log(payLoad , 'pyout')
    this.http.post("https://products-dimensions.vercel.app/products/", payLoad).subscribe((res =>{

       this.myForm.reset()
       
    this.apicall()
    }))
   
  }

   delete(id: any) {
    this.http.delete("https://products-dimensions.vercel.app/products/" + id).subscribe((res =>{
      alert('Item deletet successfull !')
      this.apicall()
    }))
  }

// HTML me jo <input type="file" (change)="onFileSelected($event)"> hai, uska function ye banaye:

onFilechange(event: any) {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file); // File read karna shuru karein

    reader.onload = (e: any) => {
      const img = new Image();
      img.src = e.target.result; // Image source set karein

      img.onload = () => {
        // 1. Canvas Create karein
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // 2. Size logic (Max width 800px rakhenge to size bahut kam ho jayega)
        const maxWidth = 800; 
        const scaleFactor = maxWidth / img.width;
        
        // Nayi width aur height set karein
        canvas.width = maxWidth;
        canvas.height = img.height * scaleFactor;

        // 3. Image ko canvas par draw karein (Resizing yahan hoti hai)
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

        // 4. Compressed Base64 nikalein
        // 'image/jpeg' format aur 0.7 (70%) quality se size drastically kam ho jayega
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7); 

        // 5. Apne variable me save karein
        this.base64String = compressedBase64; 
        
        console.log("Original Size se chota ho gaya!");
      };
    };
  }
}
// onFilechange(event: any) {
//     const img = event.target.files[0]
//     if (img) {
//       const reader = new FileReader()
//       reader.onload = (e: any) => {
//         this.base64String = e.target.result
         
//         console.log(event)
//       }
//       reader.readAsDataURL(img)
//       console.log(this.base64String , 'kysbh')
//     }
//   }


  searchActive(val: string) {
    const lowerCaseVal = val.toLowerCase()
    this.allData = this.dataBaseData.filter((data) => data.name.toLowerCase().includes(lowerCaseVal))
  }

  logout() {
    localStorage.setItem('isLogin', 'false')
    this.router.navigate(['admin'])
  }

 

  onCancle() {
    this.base64String = ''
  }

  

}
