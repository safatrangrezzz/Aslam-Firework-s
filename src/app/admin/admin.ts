import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
  constructor(private router:Router){}

Login(userId:any,userAccessKey:any){


  if( userId == 'faiz@9554' && userAccessKey == '272205' ){
    localStorage.setItem('isLogin', 'true')
    //  if(localStorage.getItem('isLogin')=== 'true'){
      this.router.navigate(['dataBase'])
    //  }
  }else{
  localStorage.setItem('isLogin' , 'false')
  alert('User and Key is incorrect. Try again')
}
 
}
// alreadyLogin(){
//  const accessAvailable = localStorage.getItem('isLogin')
//  console.log(accessAvailable)
//  if(accessAvailable === 'true'){
//   this.router.navigate(['dataBase'])
//  } else(
//   alert('access not allow Please login First')
//  )
// }
}