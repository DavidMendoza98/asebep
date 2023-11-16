import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(AuthService);
  const router = inject(Router);
  if(!loginService.isAutenticate()){
    router.navigate(['auth']);
    return false;
  } else {
    return true;
  }
  
};
