import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from '../app/guards/auth-guard.guard';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MyselfComponent } from './pages/myself/myself.component';


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
    canActivate:[authGuard]
  },
  {
    path:'myself',
    component:MyselfComponent,
    title:'Mis Perfil',
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
