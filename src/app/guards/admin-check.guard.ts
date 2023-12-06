import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {inject} from '@angular/core';
export const adminCheckGuard: CanActivateFn = (route, state) => {
  const loginService = inject(AuthService);
  const router = inject(Router);
  if(!loginService.isAdmin()){
    router.navigate(['myself']);
    return false;
  } else {
    return true;
  }
};
