
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const isLogin = localStorage.getItem('isLogin')
  let _router =inject(Router)
  if(isLogin == 'false'){
    alert('access not allow Please login First')
    _router.navigate(['admin'])

  }
  return true;
};
