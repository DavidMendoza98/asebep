import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from '../app/guards/auth-guard.guard';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MyselfComponent } from './pages/myself/myself.component';
import { adminCheckGuard } from './guards/admin-check.guard';
import { MenuComponent } from './pages/menu/menu.component';


const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent,
    title:'Asebep CURLP'
  },
  {
    path:'auth',
    component:LoginComponent,
    title:'Iniciar Sesión'
  },
  {
    path:'admin',
    component:AdminComponent,
    title:'Panel Admin',
    canActivate:[authGuard,adminCheckGuard]
  },
  {
    path:'myself',
    component:MyselfComponent,
    title:'Mis Horas',
    canActivate:[authGuard]
  },
  {
    path:'menu',
    component:MenuComponent,
    title:'Menú Principal',
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
