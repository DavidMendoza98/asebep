import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { SpinComponent } from './standalone/spin/spin.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MyselfComponent } from './pages/myself/myself.component';
import { MenuComponent } from './pages/menu/menu.component';

import { HeaderComponent } from './standalone/header/header.component';


registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SpinComponent,
    AdminComponent,
    MyselfComponent,
    MenuComponent
  ],
  imports: [

  CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
